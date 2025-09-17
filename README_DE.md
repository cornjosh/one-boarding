<div align="center">
  <h1><a href="https://github.com/cornjosh/one-boarding">One-boarding</a></h1>
  <em>Schöner anpassbarer Bordkarten-Generator mit echten IATA BCBP QR-Codes</em>
</div>

<p align="center">
<img src="https://img.shields.io/github/stars/cornjosh/one-boarding?style=flat-square" alt="GitHub Stars"/>
<img src="https://img.shields.io/github/forks/cornjosh/one-boarding?style=flat-square" alt="GitHub Forks"/>
<img src="https://img.shields.io/github/issues/cornjosh/one-boarding?style=flat-square" alt="GitHub Issues"/>
<img src="https://img.shields.io/github/last-commit/cornjosh/one-boarding?style=flat-square" alt="GitHub last commit"/>
<img src="https://img.shields.io/github/license/cornjosh/one-boarding?style=flat-square" alt="GitHub License"/>
</p>

> 📝 **Übersetzungsstatus**: Diese deutsche README ist derzeit ein Platzhalter. Eine vollständige Übersetzung ist erforderlich.
> 
> 🤖 **Übersetzungshinweis**: Diese Dokumentation wurde mit künstlicher Intelligenz (LLM) übersetzt. Sie kann Fehler oder Ungenauigkeiten enthalten. Korrekturen und Verbesserungen sind willkommen.
> 
> 🎯 **Live-Vorschau**: [https://one-boarding.linkyou.top/](https://one-boarding.linkyou.top/)

---

[简体中文](/README_CN.md) | [English](/README.md) | [日本語](/README_JA.md) | [한국어](/README_KO.md) | [Français](/README_FR.md) | [Español](/README_ES.md) | [Русский](/README_RU.md)

---

## Projektübersicht ✨

`One-boarding` generiert schöne, anpassbare Bordkarten-Interfaces mit echten Boarding-QR-Codes, die nach dem IATA Bar Coded Boarding Pass Format erstellt werden.

## Screenshots ✨

<div align="center">
    <img src="readme/main.png" alt="One-boarding Interface" height="400px">
</div>

## Hauptfunktionen 🎯

### ✈️ Bordkarten-Informationsanzeige
- [x] **Fluginformationen**: Flugnummer, Flugdatum, Abflug- und Ankunftsflughäfen
- [x] **Passagierinformationen**: Passagiername, Ticketnummer, Mitglieds-ID, Mitgliedslevel
- [x] **Boarding-Informationen**: Boarding-Zeit, Kabinenklassencode, Sitzplatznummer, Gate
- [x] **QR-Code**: Echte Boarding-QR-Codes konform mit IATA BCBP Standards

### 🌍 Internationalisierungsunterstützung (i18n)
Dieses Projekt unterstützt **14 Sprachen** mit Sprachauswahl auf der Bordkarten-Seite:

#### Unterstützte Sprachen
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

#### Sprachenwechsel-Methoden
1. **Automatische Erkennung**: Wählt automatisch die Sprache basierend auf Browser-Einstellungen
2. **URL-Parameter**: Sprache mit `?lang=sprachcode` spezifizieren, z.B. `?lang=en-US`
3. **Seiten-Selektor**: Sprach-Dropdown in der oberen rechten Ecke verwenden
4. **Lokaler Speicher**: Gewählte Sprache wird im Browser für zukünftige Besuche gespeichert

#### Übersetzungsinhalt
Alle bordkarten-bezogene Luftfahrt-Terminologie ist professionell nach regionalen Konventionen übersetzt, einschließlich:
- Bordkarten-Titel und Feldbezeichnungen
- Luftfahrt-Terminologie (Flugnummer, Gate, Sitz, etc.)
- Formular-Labels und Platzhalter-Text
- Button-Text und Benachrichtigungen

### 🏗️ Technische Features
- [x] **Einzel-Datei-Deployment**: Hauptfunktionalität in einer einzigen HTML-Datei für einfache Bereitstellung
- [x] **Responsive Design**: Kompatibel mit Desktop- und Mobilgeräten
- [x] **Echtzeit-Vorschau**: Sofortige Bordkarten-Vorschau
- [x] **Benutzerdefinierte Informationen**: Unterstützung für die Anpassung aller Bordkarten-Felder
- [x] **Airline-Unterstützung**: Unterstützung für mehrere Airline-Logos

## Projektstruktur 📁

Das Projekt verwendet eine minimalistische Architektur mit externen JavaScript-Bibliotheken und JSON-Übersetzungsdateien für Internationalisierung:

```
one-boarding/
├── index.html          # Haupt-HTML-Datei mit dem kompletten Bordkarten-Generator
├── js/
│   ├── i18n.js        # Internationalisierungs-Implementation, verwaltet Sprachladen und Textersetzung
│   ├── bcbp.min.js    # IATA BCBP QR-Code-Generierungs-Bibliothek
│   └── qrcode.min.js  # QR-Code-Generierungs-Bibliothek
├── locales/           # Übersetzungsdateien für jede Sprache
│   ├── zh-Hans.json   # Vereinfachtes Chinesisch
│   ├── en-US.json     # Englisch
│   └── ...            # Andere Sprachdateien
├── img/               # Airline-Logo-Dateien
│   ├── 3u.png        # Sichuan Airlines
│   ├── ca.png        # Air China
│   └── ...           # Andere Airline-Logos
└── readme/           # README-bezogene Ressourcen
    └── main.png      # Projekt-Screenshot
```

## Schnellstart 🚀

### Installation und Bereitstellung

1. **Repository klonen**:
   ```bash
   git clone https://github.com/cornjosh/one-boarding.git
   cd one-boarding
   ```

2. **Lokale Entwicklung**:
   ```bash
   # index.html direkt im Browser öffnen
   open index.html
   
   # Oder lokalen Server verwenden
   python -m http.server 8000
   # http://localhost:8000 besuchen
   ```

3. **Online-Erfahrung**:
   Direkt besuchen: [https://one-boarding.linkyou.top/](https://one-boarding.linkyou.top/)

### Nutzungsanweisungen
1. Die `index.html`-Datei öffnen, um die Bordkarten-Seite im Browser anzuzeigen
2. Den "Demo-Informationen verwenden"-Button klicken, um den Modal-Dialog zu öffnen
3. Relevante Informationen im Modal eingeben, um eine Bordkarte mit Ihren Daten zu generieren
4. Generierte QR-Codes entsprechen IATA BCBP Standards und können für tatsächliche Boarding-Verifizierung verwendet werden

### Benutzerdefinierte Airlines
Das Projekt unterstützt Logos für folgende Airlines:
- Sichuan Airlines (`3u`)
- Spring Airlines (`9c`) 
- Air China (`ca`)
- China Southern Airlines (`cz`)
- Hainan Airlines (`hu`)
- Xiamen Airlines (`mf`)
- China Eastern Airlines (`mu`)

Sie können Unterstützung für weitere Airlines hinzufügen, indem Sie entsprechende Airline-Logo-Dateien zum `img/`-Verzeichnis hinzufügen.

## Kompatibilität 🔧

Getestet auf modernen Browsern (Chrome, Firefox, Safari, etc.). Ältere Browser-Versionen können Stil- oder Funktionalitätsprobleme erfahren.

**Systemanforderungen:**
- Moderne Browser (Chrome 60+, Firefox 55+, Safari 12+, Edge 79+)
- JavaScript-Unterstützung
- Internetverbindung (zum Laden von Schriften und Ressourcen)

## Beiträge 🤝

Beiträge zum One-boarding-Projekt sind willkommen!

### 🐛 Fehlermeldungen
- Ein Issue auf GitHub erstellen, das das Problem beschreibt
- Browser-Version und Betriebssystem-Informationen einschließen
- Reproduktionsschritte und Fehler-Screenshots bereitstellen

### 💡 Feature-Vorschläge
- Neue Features oder Verbesserungen vorschlagen
- Anwendungsfälle und erwartete Ergebnisse erklären

### 🌍 Übersetzungsbeiträge
- Helfen, bestehende Sprachübersetzungen zu verbessern
- Unterstützung für neue Sprachen hinzufügen
- Dokumentationsübersetzungen aktualisieren

### 💻 Code-Beiträge
- Das Projekt-Repository forken
- Einen Feature-Branch erstellen
- Einen Pull Request mit klaren Beschreibungen einreichen

## Entwicklungs-Roadmap 📋

### Aktuelle Version (v2.0)
- [x] Internationalisierungsunterstützung mit 14 Sprachoptionen hinzugefügt
- [x] IATA BCBP Standard QR-Code-Generierung implementiert
- [x] Responsive Design-Optimierung

### Zukünftige Pläne
- [ ] WeChat-Teilen-Funktionalität
- [ ] Unterstützung für mehr Airline-Logos
- [ ] Mobile-App-Version
- [ ] Batch-Generierungs-Features
- [ ] Benutzerdefinierte Themes und Styling

## Danksagungen 💐

Dieses Projekt wurde von den folgenden ausgezeichneten Projekten inspiriert und unterstützt:

### Projekt-Referenzen
- [**@georgesmith46/bcbp**](https://github.com/georgesmith46/bcbp) - IATA Bar Coded Boarding Pass Kodierungs-/Dekodierungs-Bibliothek
- [**@mavinii/boarding-pass**](https://github.com/mavinii/boarding-pass) - Bordkarten-Design-Referenz

Besonderen Dank an alle Mitwirkenden und Tester für ihre Unterstützung! 🙏

---

🎫 **One-boarding** ©Josh Zeng. Veröffentlicht unter der MIT-Lizenz.

Erstellt und gepflegt von Josh Zeng.

[@Blog](https://linkyou.top/) · [@GitHub](https://github.com/cornjosh) · [Live Demo](https://one-boarding.linkyou.top/)