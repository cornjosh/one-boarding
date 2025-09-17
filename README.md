<div align="center">
  <h1><a href="https://github.com/cornjosh/one-boarding">One-boarding</a></h1>
  <em>Beautiful customizable boarding pass generator with real IATA BCBP QR codes</em>
</div>

<p align="center">
<img src="https://img.shields.io/github/stars/cornjosh/one-boarding?style=flat-square" alt="GitHub Stars"/>
<img src="https://img.shields.io/github/forks/cornjosh/one-boarding?style=flat-square" alt="GitHub Forks"/>
<img src="https://img.shields.io/github/issues/cornjosh/one-boarding?style=flat-square" alt="GitHub Issues"/>
<img src="https://img.shields.io/github/last-commit/cornjosh/one-boarding?style=flat-square" alt="GitHub last commit"/>
<img src="https://img.shields.io/github/license/cornjosh/one-boarding?style=flat-square" alt="GitHub License"/>
</p>

<h5 align="center">One-boarding is an open-source boarding pass generator that creates beautiful, customizable boarding pass interfaces with real IATA Bar Coded Boarding Pass (BCBP) standard QR codes. Features comprehensive internationalization support for 14 languages.</h5>

> 🎯 **Live Preview**: [https://one-boarding.linkyou.top/](https://one-boarding.linkyou.top/)

---

[简体中文](/README_CN.md) | [日本語](/README_JA.md) | [한국어](/README_KO.md) | [Français](/README_FR.md) | [Deutsch](/README_DE.md) | [Español](/README_ES.md) | [Русский](/README_RU.md)

---

## Project Overview ✨

`One-boarding` generates beautiful, customizable boarding pass interfaces with real boarding QR codes generated according to the IATA Bar Coded Boarding Pass format.

## Screenshots ✨

<div align="center">
    <img src="readme/main.png" alt="One-boarding Interface" height="400px">
</div>

## Features 🎯

### ✈️ Boarding Pass Information Display
- [x] **Flight Information**: Flight number, flight date, departure and arrival airports
- [x] **Passenger Information**: Passenger name, ticket number, member ID, and membership level
- [x] **Boarding Information**: Boarding time, cabin class code, seat number, and gate
- [x] **QR Code**: Real boarding QR codes compliant with IATA BCBP standards

### 🌍 Internationalization Support (i18n)
This project supports **14 languages** with language selection available on the boarding pass page:

#### Supported Languages
- **zh-Hans**: 简体中文 🇨🇳
- **zh-Hant**: 繁體中文 🇹🇼 
- **en-US**: English (United States) 🇺🇸
- **fr-FR**: Français (France) 🇫🇷
- **de-DE**: Deutsch (Deutschland) 🇩🇪
- **es-ES**: Español (España) 🇪🇸
- **pt-PT**: Português (Portugal) 🇵🇹
- **it-IT**: Italiano (Italia) 🇮🇹
- **ru-RU**: Русский (Россия) 🇷🇺
- **ja-JP**: 日本語 (日本) 🇯🇵
- **ko-KR**: 한국어 (대한민국) 🇰🇷
- **tr-TR**: Türkçe (Türkiye) 🇹🇷
- **pl-PL**: Polski (Polska) 🇵🇱
- **hu-HU**: Magyar (Magyarország) 🇭🇺

#### Language Switching Methods
1. **Auto-detection**: Automatically selects language based on browser settings
2. **URL Parameter**: Specify language using `?lang=language-code`, e.g., `?lang=en-US`
3. **Page Selector**: Use the language dropdown in the top-right corner
4. **Local Storage**: Selected language is saved in browser for future visits

#### Translation Content
All boarding pass-related aviation terminology is professionally translated according to regional conventions, including:
- Boarding pass titles and field labels
- Aviation terminology (flight number, gate, seat, etc.)
- Form labels and placeholder text
- Button text and notification messages

### 🏗️ Technical Features
- [x] **Single-file Deployment**: Main functionality contained in a single HTML file for easy deployment
- [x] **Responsive Design**: Compatible with desktop and mobile devices
- [x] **Real-time Preview**: Instant boarding pass preview
- [x] **Custom Information**: Support for customizing all boarding pass fields
- [x] **Airline Support**: Support for multiple airline logos

## Project Structure 📁

The project uses a minimalist architecture with external JavaScript libraries and JSON translation files for internationalization:

```
one-boarding/
├── index.html          # Main HTML file containing the complete boarding pass generator
├── js/
│   ├── i18n.js        # Internationalization implementation, handles language loading and text replacement
│   ├── bcbp.min.js    # IATA BCBP QR code generation library
│   └── qrcode.min.js  # QR code generation library
├── locales/           # Translation files for each language
│   ├── zh-Hans.json   # Simplified Chinese
│   ├── en-US.json     # English
│   └── ...            # Other language files
├── img/               # Airline logo files
│   ├── 3u.png        # Sichuan Airlines
│   ├── ca.png        # Air China
│   └── ...           # Other airline logos
└── readme/           # README related resources
    └── main.png      # Project screenshot
```

## Quick Start 🚀

### Installation & Deployment

1. **Clone Repository**:
   ```bash
   git clone https://github.com/cornjosh/one-boarding.git
   cd one-boarding
   ```

2. **Local Development**:
   ```bash
   # Open index.html directly in browser
   open index.html
   
   # Or use a local server
   python -m http.server 8000
   # Visit http://localhost:8000
   ```

3. **Online Experience**:
   Visit directly: [https://one-boarding.linkyou.top/](https://one-boarding.linkyou.top/)

### Usage Instructions
1. Open the `index.html` file to view the boarding pass page in your browser
2. Click the "Use Demo Information" button to open the modal dialog
3. Enter relevant information in the modal to generate a boarding pass with your data
4. Generated QR codes comply with IATA BCBP standards and can be used for actual boarding verification

### Custom Airlines
The project supports logos for the following airlines:
- Sichuan Airlines (`3u`)
- Spring Airlines (`9c`) 
- Air China (`ca`)
- China Southern Airlines (`cz`)
- Hainan Airlines (`hu`)
- Xiamen Airlines (`mf`)
- China Eastern Airlines (`mu`)

You can add support for more airlines by adding corresponding airline logo files to the `img/` directory.

## Compatibility 🔧

Tested on modern browsers (Chrome, Firefox, Safari, etc.). Older browser versions may experience styling or functionality issues.

**System Requirements:**
- Modern browsers (Chrome 60+, Firefox 55+, Safari 12+, Edge 79+)
- JavaScript support
- Internet connection (for loading fonts and resources)

## Contributing 🤝

Contributions to the One-boarding project are welcome!

### 🐛 Bug Reports
- Create an issue on GitHub describing the problem
- Include browser version and operating system information
- Provide reproduction steps and error screenshots

### 💡 Feature Suggestions
- Propose new features or improvements
- Explain use cases and expected outcomes

### 🌍 Translation Contributions
- Help improve existing language translations
- Add support for new languages
- Update documentation translations

### 💻 Code Contributions
- Fork the project repository
- Create a feature branch
- Submit a Pull Request with clear descriptions

## Development Roadmap 📋

### Current Version (v2.0)
- [x] Added internationalization support with 14 language options
- [x] Implemented IATA BCBP standard QR code generation
- [x] Responsive design optimization

### Future Plans
- [ ] WeChat sharing functionality
- [ ] Support for more airline logos
- [ ] Mobile application version
- [ ] Batch generation features
- [ ] Custom themes and styling

## Acknowledgments 💐

This project was inspired and helped by the following excellent projects:

### Project References
- [**@georgesmith46/bcbp**](https://github.com/georgesmith46/bcbp) - IATA Bar Coded Boarding Pass encoding/decoding library
- [**@mavinii/boarding-pass**](https://github.com/mavinii/boarding-pass) - Boarding pass design reference

Special thanks to all contributors and testers for their support! 🙏

---

🎫 **One-boarding** ©Josh Zeng. Released under the MIT License.

Authored and maintained by Josh Zeng.

[@Blog](https://linkyou.top/) · [@GitHub](https://github.com/cornjosh) · [Live Demo](https://one-boarding.linkyou.top/)