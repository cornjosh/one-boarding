<div align="center">
  <h3><a href="https://github.com/cornjosh/one-boarding">One-boarding</a></h3>
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
> 🎯 **Live-Vorschau**: [https://one-boarding.linkyou.top/](https://one-boarding.linkyou.top/)

---

[简体中文](/README_CN.md) | [English](/README.md) | [日本語](/README_JA.md) | [한국어](/README_KO.md) | [Français](/README_FR.md) | [Español](/README_ES.md) | [Русский](/README_RU.md)

---

## Projektübersicht ✨

One-boarding ist ein Open-Source-Bordkarten-Generator, der schöne, anpassbare Bordkarten-Interfaces mit echten QR-Codes erstellt, die den IATA Bar Coded Boarding Pass (BCBP) Standards entsprechen. Es bietet umfassende Internationalisierungsunterstützung für 14 Sprachen.

## Hauptfunktionen 🎯

### ✈️ Bordkarten-Informationsanzeige
- [x] **Fluginformationen**: Flugnummer, Flugdatum, Abflug- und Ankunftsflughäfen
- [x] **Passagierinformationen**: Passagiername, Ticketnummer, Mitglieds-ID, Mitgliedslevel
- [x] **Boarding-Informationen**: Boarding-Zeit, Kabinenklassencode, Sitzplatznummer, Gate
- [x] **QR-Code**: Echte Boarding-QR-Codes konform mit IATA BCBP Standards

## Screenshots ✨

<div align="center">
    <img src="readme/main.png" alt="One-boarding Interface" height="400px">
</div>

## Schnellstart 🚀

### Installation und Bereitstellung

1. **Repository klonen**:
   ```bash
   git clone https://github.com/cornjosh/one-boarding.git
   cd one-boarding
   ```

2. **Lokale Ausführung**:
   ```bash
   # index.html direkt im Browser öffnen
   open index.html
   
   # Oder lokalen Server verwenden
   python -m http.server 8000
   # http://localhost:8000 besuchen
   ```

3. **Online-Erfahrung**:
   Direkt besuchen: [https://one-boarding.linkyou.top/](https://one-boarding.linkyou.top/)

## Kompatibilität 🔧

Getestet auf modernen Browsern (Chrome, Firefox, Safari, etc.).

**Systemanforderungen:**
- Moderne Browser (Chrome 60+, Firefox 55+, Safari 12+, Edge 79+)
- JavaScript-Unterstützung
- Internetverbindung (zum Laden von Schriften und Ressourcen)

## Danksagungen 💐

Dieses Projekt wurde von den folgenden ausgezeichneten Projekten inspiriert und unterstützt:

### Projektreferenzen
- [**@georgesmith46/bcbp**](https://github.com/georgesmith46/bcbp) - IATA Bar Coded Boarding Pass Kodierungs-/Dekodierungsbibliothek
- [**@mavinii/boarding-pass**](https://github.com/mavinii/boarding-pass) - Bordkarten-Design-Referenz

Vielen Dank an alle Mitwirkenden und Tester für ihre Unterstützung! 🙏

---

🎫 **One-boarding** ©Josh Zeng. Released under the MIT License License.

[@Blog](https://linkyou.top/) · [@GitHub](https://github.com/cornjosh) · [Live Demo](https://one-boarding.linkyou.top/)