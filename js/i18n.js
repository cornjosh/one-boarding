/**
 * I18n (Internationalization) functionality for the boarding pass application
 * Handles language loading, text replacement, and language switching
 */

class I18nManager {
  constructor() {
    this.currentLanguage = 'zh-Hans'; // Default language
    this.translations = {};
    this.supportedLanguages = [
      'zh-Hans', 'zh-Hant', 'en-US', 'fr-FR', 'de-DE', 'es-ES',
      'pt-PT', 'it-IT', 'ru-RU', 'ja-JP', 'ko-KR', 'tr-TR', 'pl-PL', 'hu-HU'
    ];
    
    // Initialize i18n
    this.init();
  }

  async init() {
    // Try to get language from URL parameter or localStorage
    const urlLang = this.getLanguageFromURL();
    const storedLang = localStorage.getItem('boardingpass-language');
    
    // Determine which language to use
    this.currentLanguage = urlLang || storedLang || this.detectBrowserLanguage() || 'zh-Hans';
    
    // Load the language
    await this.loadLanguage(this.currentLanguage);
    
    // Apply translations
    this.applyTranslations();
    
    // Create language selector
    this.createLanguageSelector();
  }

  getLanguageFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang');
    return this.supportedLanguages.includes(lang) ? lang : null;
  }

  detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    
    // Check for exact match
    if (this.supportedLanguages.includes(browserLang)) {
      return browserLang;
    }
    
    // Check for language prefix match (e.g., 'en' matches 'en-US')
    const langPrefix = browserLang.split('-')[0];
    const matchingLang = this.supportedLanguages.find(lang => lang.startsWith(langPrefix));
    
    return matchingLang || null;
  }

  async loadLanguage(language) {
    if (this.translations[language]) {
      return; // Already loaded
    }

    try {
      const response = await fetch(`locales/${language}.json`);
      if (!response.ok) {
        throw new Error(`Failed to load language file: ${language}`);
      }
      
      this.translations[language] = await response.json();
      console.log(`Loaded language: ${language}`);
    } catch (error) {
      console.error(`Error loading language ${language}:`, error);
      
      // Fallback to default language if not already trying it
      if (language !== 'zh-Hans') {
        await this.loadLanguage('zh-Hans');
        this.currentLanguage = 'zh-Hans';
      }
    }
  }

  getTranslation(key) {
    const keys = key.split('.');
    let value = this.translations[this.currentLanguage];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    return value || key;
  }

  applyTranslations() {
    // Update page title
    document.title = this.getTranslation('title');
    
    // Update HTML lang attribute
    document.documentElement.lang = this.currentLanguage;
    
    // Apply translations to all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = this.getTranslation(key);
      
      if (element.tagName === 'INPUT' && element.type !== 'submit') {
        // Handle input placeholders
        element.placeholder = translation;
      } else {
        // Handle text content
        element.textContent = translation;
      }
    });

    // Apply translations to elements with data-i18n-html attribute (for HTML content)
    const htmlElements = document.querySelectorAll('[data-i18n-html]');
    htmlElements.forEach(element => {
      const key = element.getAttribute('data-i18n-html');
      const translation = this.getTranslation(key);
      element.innerHTML = translation;
    });
  }

  createLanguageSelector() {
    const languageSelector = document.getElementById('language-selector');
    if (!languageSelector) {
      // Create language selector if it doesn't exist
      this.addLanguageSelectorToDOM();
      return;
    }

    // Clear existing options
    languageSelector.innerHTML = '';

    // Add options for each supported language
    this.supportedLanguages.forEach(lang => {
      const option = document.createElement('option');
      option.value = lang;
      option.textContent = this.getTranslation(`languageSelector.languages.${lang}`);
      option.selected = lang === this.currentLanguage;
      languageSelector.appendChild(option);
    });

    // Add change event listener
    languageSelector.addEventListener('change', (e) => {
      this.changeLanguage(e.target.value);
    });
  }

  addLanguageSelectorToDOM() {
    // Create language selector container
    const selectorContainer = document.createElement('div');
    selectorContainer.className = 'language-selector-container';
    selectorContainer.innerHTML = `
      <label for="language-selector" data-i18n="languageSelector.label">选择语言</label>
      <select id="language-selector" class="language-selector">
        ${this.supportedLanguages.map(lang => 
          `<option value="${lang}" ${lang === this.currentLanguage ? 'selected' : ''}>
            ${this.getTranslation(`languageSelector.languages.${lang}`)}
          </option>`
        ).join('')}
      </select>
    `;

    // Add to the top of the boarding pass
    const boardingPass = document.getElementById('bording-pass');
    if (boardingPass) {
      boardingPass.insertBefore(selectorContainer, boardingPass.firstChild);
    }

    // Apply translations to the label
    this.applyTranslations();

    // Add event listener
    const selector = document.getElementById('language-selector');
    selector.addEventListener('change', (e) => {
      this.changeLanguage(e.target.value);
    });
  }

  async changeLanguage(language) {
    if (!this.supportedLanguages.includes(language)) {
      console.error(`Unsupported language: ${language}`);
      return;
    }

    this.currentLanguage = language;
    
    // Save to localStorage
    localStorage.setItem('boardingpass-language', language);
    
    // Update URL parameter
    const url = new URL(window.location);
    url.searchParams.set('lang', language);
    window.history.replaceState({}, '', url);

    // Load language if not already loaded
    await this.loadLanguage(language);
    
    // Apply translations
    this.applyTranslations();
    
    // Update modal translations if it exists
    this.updateModalTranslations();
    
    console.log(`Language changed to: ${language}`);
  }

  updateModalTranslations() {
    // This will be called when language changes to update any open modals
    // We'll update the Swal.fire function to use translations
  }

  // Helper method to get translations for modal content
  getModalTranslations() {
    return {
      title: this.getTranslation('modalTitle'),
      fields: {
        passengerName: this.getTranslation('modalFields.passengerName'),
        ticketNumber: this.getTranslation('modalFields.ticketNumber'),
        pnr: this.getTranslation('modalFields.pnr'),
        memberID: this.getTranslation('modalFields.memberID'),
        memberLevel: this.getTranslation('modalFields.memberLevel'),
        carrierCode: this.getTranslation('modalFields.carrierCode'),
        flightNumberDigits: this.getTranslation('modalFields.flightNumberDigits'),
        flightDate: this.getTranslation('modalFields.flightDate'),
        departureAirport: this.getTranslation('modalFields.departureAirport'),
        departureAirportName: this.getTranslation('modalFields.departureAirportName'),
        departureTime: this.getTranslation('modalFields.departureTime'),
        arrivalAirport: this.getTranslation('modalFields.arrivalAirport'),
        arrivalAirportName: this.getTranslation('modalFields.arrivalAirportName'),
        arrivalTime: this.getTranslation('modalFields.arrivalTime'),
        arrivalDayOffset: this.getTranslation('modalFields.arrivalDayOffset'),
        boardingTime: this.getTranslation('modalFields.boardingTime'),
        compartmentCode: this.getTranslation('modalFields.compartmentCode'),
        seatNumber: this.getTranslation('modalFields.seatNumber'),
        gate: this.getTranslation('modalFields.gate'),
        checkInSequenceNumber: this.getTranslation('modalFields.checkInSequenceNumber')
      },
      placeholders: {
        passengerName: this.getTranslation('placeholders.passengerName'),
        ticketNumber: this.getTranslation('placeholders.ticketNumber'),
        pnr: this.getTranslation('placeholders.pnr'),
        memberID: this.getTranslation('placeholders.memberID'),
        memberLevel: this.getTranslation('placeholders.memberLevel'),
        carrierCode: this.getTranslation('placeholders.carrierCode'),
        flightNumberDigits: this.getTranslation('placeholders.flightNumberDigits'),
        departureAirport: this.getTranslation('placeholders.departureAirport'),
        departureAirportName: this.getTranslation('placeholders.departureAirportName'),
        arrivalAirport: this.getTranslation('placeholders.arrivalAirport'),
        arrivalAirportName: this.getTranslation('placeholders.arrivalAirportName'),
        arrivalDayOffset: this.getTranslation('placeholders.arrivalDayOffset'),
        compartmentCode: this.getTranslation('placeholders.compartmentCode'),
        seatNumber: this.getTranslation('placeholders.seatNumber'),
        gate: this.getTranslation('placeholders.gate'),
        checkInSequenceNumber: this.getTranslation('placeholders.checkInSequenceNumber')
      },
      buttons: {
        generate: this.getTranslation('modalButtons.generate'),
        useDemo: this.getTranslation('modalButtons.useDemo')
      },
      demoSuccess: {
        title: this.getTranslation('modalDemoSuccess.title'),
        text: this.getTranslation('modalDemoSuccess.text')
      }
    };
  }
}

// Global i18n manager instance
let i18nManager;

// Initialize i18n when DOM is loaded
document.addEventListener('DOMContentLoaded', async () => {
  i18nManager = new I18nManager();
});