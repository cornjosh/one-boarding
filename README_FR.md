<div align="center">
  <img src="readme/main.png" alt="One-boarding" height="200px">
  <h3><a href="https://github.com/cornjosh/one-boarding">One-boarding</a></h3>
  <em>Générateur de carte d'embarquement personnalisable avec de vrais codes QR IATA BCBP</em>
</div>

<p align="center">
<img src="https://img.shields.io/github/stars/cornjosh/one-boarding?style=flat-square" alt="GitHub Stars"/>
<img src="https://img.shields.io/github/forks/cornjosh/one-boarding?style=flat-square" alt="GitHub Forks"/>
<img src="https://img.shields.io/github/issues/cornjosh/one-boarding?style=flat-square" alt="GitHub Issues"/>
<img src="https://img.shields.io/github/last-commit/cornjosh/one-boarding?style=flat-square" alt="GitHub last commit"/>
<img src="https://img.shields.io/github/license/cornjosh/one-boarding?style=flat-square" alt="GitHub License"/>
</p>

> 📝 **État de traduction**: Ce README français est actuellement un placeholder. Une traduction complète est nécessaire.
> 
> 🎯 **Aperçu en direct**: [https://one-boarding.linkyou.top/](https://one-boarding.linkyou.top/)

---

[简体中文](/README.md) | [English](/README_EN.md) | [日本語](/README_JA.md) | [한국어](/README_KO.md) | [Deutsch](/README_DE.md) | [Español](/README_ES.md) | [Русский](/README_RU.md)

---

## Aperçu du projet ✨

One-boarding est un générateur de cartes d'embarquement open source qui crée de belles interfaces de cartes d'embarquement personnalisables avec de vrais codes QR conformes aux normes IATA Bar Coded Boarding Pass (BCBP). Il offre un support d'internationalisation complet pour 14 langues.

## Fonctionnalités principales 🎯

### ✈️ Affichage des informations de la carte d'embarquement
- [x] **Informations de vol**: Numéro de vol, date de vol, aéroports de départ et d'arrivée
- [x] **Informations passager**: Nom du passager, numéro de billet, ID membre, niveau de membre
- [x] **Informations d'embarquement**: Heure d'embarquement, code de classe cabine, numéro de siège, porte
- [x] **Code QR**: Vrais codes QR d'embarquement conformes aux normes IATA BCBP

## Démarrage rapide 🚀

### Installation et déploiement

1. **Cloner le dépôt**:
   ```bash
   git clone https://github.com/cornjosh/one-boarding.git
   cd one-boarding
   ```

2. **Exécution locale**:
   ```bash
   # Ouvrir index.html directement dans le navigateur
   open index.html
   
   # Ou utiliser un serveur local
   python -m http.server 8000
   # Visiter http://localhost:8000
   ```

3. **Expérience en ligne**:
   Visiter directement: [https://one-boarding.linkyou.top/](https://one-boarding.linkyou.top/)

## Compatibilité 🔧

Testé sur les navigateurs modernes (Chrome, Firefox, Safari, etc.).

**Configuration requise:**
- Navigateurs modernes (Chrome 60+, Firefox 55+, Safari 12+, Edge 79+)
- Support JavaScript
- Connexion Internet (pour le chargement des polices et ressources)

## Remerciements 💐

Ce projet a été inspiré et aidé par les excellents projets suivants:

### Références de projet
- [**@georgesmith46/bcbp**](https://github.com/georgesmith46/bcbp) - Bibliothèque d'encodage/décodage IATA Bar Coded Boarding Pass
- [**@mavinii/boarding-pass**](https://github.com/mavinii/boarding-pass) - Référence de conception de carte d'embarquement

Merci à tous les contributeurs et testeurs pour leur support ! 🙏

---

🎫 **One-boarding** ©Josh Zeng. Released under the [PLACEHOLDER_LICENSE] License.

[@Blog](https://linkyou.top/) · [@GitHub](https://github.com/cornjosh) · [Live Demo](https://one-boarding.linkyou.top/)