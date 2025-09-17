<div align="center">
  <h1><a href="https://github.com/cornjosh/one-boarding">One-boarding</a></h1>
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
> 🤖 **Avis de traduction**: Cette documentation a été traduite en utilisant l'intelligence artificielle (LLM). Elle peut contenir des erreurs ou des imprécisions. Les corrections et améliorations sont les bienvenues.
> 
> 🎯 **Aperçu en direct**: [https://one-boarding.linkyou.top/](https://one-boarding.linkyou.top/)

---

[简体中文](/README_CN.md) | [English](/README.md) | [日本語](/README_JA.md) | [한국어](/README_KO.md) | [Deutsch](/README_DE.md) | [Español](/README_ES.md) | [Русский](/README_RU.md)

---

## Aperçu du projet ✨

`One-boarding` génère de belles interfaces de cartes d'embarquement personnalisables avec de vrais codes QR d'embarquement générés selon le format IATA Bar Coded Boarding Pass.

## Screenshots ✨

<div align="center">
    <img src="readme/main.png" alt="One-boarding Interface" height="400px">
</div>

## Fonctionnalités principales 🎯

### ✈️ Affichage des informations de la carte d'embarquement
- [x] **Informations de vol**: Numéro de vol, date de vol, aéroports de départ et d'arrivée
- [x] **Informations passager**: Nom du passager, numéro de billet, ID membre, niveau de membre
- [x] **Informations d'embarquement**: Heure d'embarquement, code de classe cabine, numéro de siège, porte
- [x] **Code QR**: Vrais codes QR d'embarquement conformes aux normes IATA BCBP

### 🌍 Support d'Internationalisation (i18n)
Ce projet supporte **14 langues** avec sélection de langue disponible sur la page de carte d'embarquement:

#### Langues Supportées
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

#### Méthodes de Changement de Langue
1. **Détection automatique**: Sélectionne automatiquement la langue basée sur les paramètres du navigateur
2. **Paramètre URL**: Spécifier la langue en utilisant `?lang=code-langue`, ex., `?lang=en-US`
3. **Sélecteur de page**: Utiliser le menu déroulant de langue dans le coin supérieur droit
4. **Stockage local**: La langue sélectionnée est sauvegardée dans le navigateur pour les futures visites

#### Contenu de Traduction
Toute la terminologie aéronautique liée aux cartes d'embarquement est traduite professionnellement selon les conventions régionales, incluant:
- Titres de cartes d'embarquement et étiquettes de champs
- Terminologie aéronautique (numéro de vol, porte, siège, etc.)
- Étiquettes de formulaires et texte d'espace réservé
- Texte de boutons et messages de notification

### 🏗️ Fonctionnalités Techniques
- [x] **Déploiement mono-fichier**: Fonctionnalité principale contenue dans un seul fichier HTML pour un déploiement facile
- [x] **Design responsive**: Compatible avec les appareils de bureau et mobiles
- [x] **Aperçu en temps réel**: Aperçu instantané de carte d'embarquement
- [x] **Informations personnalisées**: Support pour personnaliser tous les champs de carte d'embarquement
- [x] **Support des compagnies aériennes**: Support pour plusieurs logos de compagnies aériennes

## Structure du Projet 📁

Le projet utilise une architecture minimaliste avec des bibliothèques JavaScript externes et des fichiers de traduction JSON pour l'internationalisation:

```
one-boarding/
├── index.html          # Fichier HTML principal contenant le générateur complet de cartes d'embarquement
├── js/
│   ├── i18n.js        # Implémentation d'internationalisation, gère le chargement de langues et remplacement de texte
│   ├── bcbp.min.js    # Bibliothèque de génération de codes QR IATA BCBP
│   └── qrcode.min.js  # Bibliothèque de génération de codes QR
├── locales/           # Fichiers de traduction pour chaque langue
│   ├── zh-Hans.json   # Chinois simplifié
│   ├── en-US.json     # Anglais
│   └── ...            # Autres fichiers de langue
├── img/               # Fichiers de logos de compagnies aériennes
│   ├── 3u.png        # Sichuan Airlines
│   ├── ca.png        # Air China
│   └── ...           # Autres logos de compagnies aériennes
└── readme/           # Ressources liées au README
    └── main.png      # Capture d'écran du projet
```

## Démarrage rapide 🚀

### Installation et déploiement

1. **Cloner le dépôt**:
   ```bash
   git clone https://github.com/cornjosh/one-boarding.git
   cd one-boarding
   ```

2. **Développement local**:
   ```bash
   # Ouvrir index.html directement dans le navigateur
   open index.html
   
   # Ou utiliser un serveur local
   python -m http.server 8000
   # Visiter http://localhost:8000
   ```

3. **Expérience en ligne**:
   Visiter directement: [https://one-boarding.linkyou.top/](https://one-boarding.linkyou.top/)

### Instructions d'Utilisation
1. Ouvrir le fichier `index.html` pour voir la page de carte d'embarquement dans votre navigateur
2. Cliquer sur le bouton "Utiliser les Informations de Démonstration" pour ouvrir la boîte de dialogue modale
3. Entrer les informations pertinentes dans le modal pour générer une carte d'embarquement avec vos données
4. Les codes QR générés sont conformes aux normes IATA BCBP et peuvent être utilisés pour la vérification d'embarquement réelle

### Compagnies Aériennes Personnalisées
Le projet supporte les logos pour les compagnies aériennes suivantes:
- Sichuan Airlines (`3u`)
- Spring Airlines (`9c`) 
- Air China (`ca`)
- China Southern Airlines (`cz`)
- Hainan Airlines (`hu`)
- Xiamen Airlines (`mf`)
- China Eastern Airlines (`mu`)

Vous pouvez ajouter le support pour plus de compagnies aériennes en ajoutant les fichiers de logo correspondants au répertoire `img/`.

## Compatibilité 🔧

Testé sur les navigateurs modernes (Chrome, Firefox, Safari, etc.). Les versions plus anciennes de navigateurs peuvent rencontrer des problèmes de style ou de fonctionnalité.

**Configuration requise:**
- Navigateurs modernes (Chrome 60+, Firefox 55+, Safari 12+, Edge 79+)
- Support JavaScript
- Connexion Internet (pour le chargement des polices et ressources)

## Contributions 🤝

Les contributions au projet One-boarding sont les bienvenues!

### 🐛 Rapports de Bogues
- Créer un problème sur GitHub décrivant le problème
- Inclure les informations de version du navigateur et du système d'exploitation
- Fournir les étapes de reproduction et captures d'écran d'erreurs

### 💡 Suggestions de Fonctionnalités
- Proposer de nouvelles fonctionnalités ou améliorations
- Expliquer les cas d'usage et résultats attendus

### 🌍 Contributions de Traduction
- Aider à améliorer les traductions de langues existantes
- Ajouter le support pour de nouvelles langues
- Mettre à jour les traductions de documentation

### 💻 Contributions de Code
- Forker le dépôt du projet
- Créer une branche de fonctionnalité
- Soumettre une Pull Request avec des descriptions claires

## Feuille de Route de Développement 📋

### Version Actuelle (v2.0)
- [x] Ajouté le support d'internationalisation avec 14 options de langue
- [x] Implémenté la génération de codes QR standard IATA BCBP
- [x] Optimisation du design responsive

### Plans Futurs
- [ ] Fonctionnalité de partage WeChat
- [ ] Support pour plus de logos de compagnies aériennes
- [ ] Version d'application mobile
- [ ] Fonctionnalités de génération par lots
- [ ] Thèmes personnalisés et stylisation

## Remerciements 💐

Ce projet a été inspiré et aidé par les excellents projets suivants:

### Références de projet
- [**@georgesmith46/bcbp**](https://github.com/georgesmith46/bcbp) - Bibliothèque d'encodage/décodage IATA Bar Coded Boarding Pass
- [**@mavinii/boarding-pass**](https://github.com/mavinii/boarding-pass) - Référence de conception de carte d'embarquement

Remerciements spéciaux à tous les contributeurs et testeurs pour leur support ! 🙏

---

🎫 **One-boarding** ©Josh Zeng. Publié sous la Licence MIT.

Créé et maintenu par Josh Zeng.

[@Blog](https://linkyou.top/) · [@GitHub](https://github.com/cornjosh) · [Demo en Direct](https://one-boarding.linkyou.top/)