<div align="center">
  <h3><a href="https://github.com/cornjosh/one-boarding">One-boarding</a></h3>
  <em>実際のIATA BCBP QRコード付き美しいカスタマイズ可能な搭乗券ジェネレーター</em>
</div>

<p align="center">
<img src="https://img.shields.io/github/stars/cornjosh/one-boarding?style=flat-square" alt="GitHub Stars"/>
<img src="https://img.shields.io/github/forks/cornjosh/one-boarding?style=flat-square" alt="GitHub Forks"/>
<img src="https://img.shields.io/github/issues/cornjosh/one-boarding?style=flat-square" alt="GitHub Issues"/>
<img src="https://img.shields.io/github/last-commit/cornjosh/one-boarding?style=flat-square" alt="GitHub last commit"/>
<img src="https://img.shields.io/github/license/cornjosh/one-boarding?style=flat-square" alt="GitHub License"/>
</p>

> 📝 **翻訳状況**: この日本語版READMEは現在プレースホルダーです。完全な翻訳が必要です。
> 
> 🎯 **ライブプレビュー**: [https://one-boarding.linkyou.top/](https://one-boarding.linkyou.top/)

---

[English](/README.md) | [简体中文](/README_CN.md) | [한국어](/README_KO.md) | [Français](/README_FR.md) | [Deutsch](/README_DE.md) | [Español](/README_ES.md) | [Русский](/README_RU.md)

---

## プロジェクト概要 ✨

One-boardingは、実際のIATA Bar Coded Boarding Pass（BCBP）標準に準拠したQRコードを含む、美しくカスタマイズ可能な搭乗券インターフェースを作成するオープンソースの搭乗券ジェネレーターです。14言語の包括的な国際化サポートを提供します。

## 主な機能 🎯

### ✈️ 搭乗券情報表示
- [x] **フライト情報**: フライト番号、フライト日付、出発・到着空港
- [x] **乗客情報**: 乗客名、チケット番号、会員ID、会員レベル
- [x] **搭乗情報**: 搭乗時間、キャビンクラスコード、座席番号、ゲート
- [x] **QRコード**: IATA BCBP標準に準拠した実際の搭乗QRコード

### 🌍 国際化サポート (i18n)
このプロジェクトは **14言語** をサポートし、搭乗券ページで言語選択が可能です。

#### サポート言語
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

## プロジェクト截图 ✨

<div align="center">
    <img src="readme/main.png" alt="One-boarding インターフェース" height="400px">
</div>

## クイックスタート 🚀

### インストールとデプロイ

1. **リポジトリのクローン**:
   ```bash
   git clone https://github.com/cornjosh/one-boarding.git
   cd one-boarding
   ```

2. **ローカル実行**:
   ```bash
   # ブラウザでindex.htmlを直接開く
   open index.html
   
   # またはローカルサーバーを使用
   python -m http.server 8000
   # http://localhost:8000 にアクセス
   ```

3. **オンライン体験**:
   直接アクセス: [https://one-boarding.linkyou.top/](https://one-boarding.linkyou.top/)

## 使用方法
1. `index.html` ファイルを開き、ブラウザで搭乗券ページを表示
2. 「デモ情報を使用」ボタンをクリックしてモーダルダイアログを開く
3. モーダルに関連情報を入力して、データ付きの搭乗券を生成
4. 生成されたQRコードはIATA BCBP標準に準拠し、実際の搭乗確認に使用可能

## 互換性 🔧

モダンブラウザ（Chrome、Firefox、Safari等）でテスト済み。

**システム要件:**
- モダンブラウザ (Chrome 60+, Firefox 55+, Safari 12+, Edge 79+)
- JavaScript サポート
- インターネット接続（フォントとリソースの読み込み用）

## 貢献 🤝

One-boardingプロジェクトへの貢献を歓迎します！

### 💻 コード貢献
- プロジェクトリポジトリをフォーク
- 機能ブランチを作成
- 明確な説明を含むプルリクエストを提出

## 謝辞 💐

このプロジェクトは以下の優れたプロジェクトからインスピレーションと支援を受けました：

### プロジェクト参考
- [**@georgesmith46/bcbp**](https://github.com/georgesmith46/bcbp) - IATA Bar Coded Boarding Pass エンコード/デコードライブラリ
- [**@mavinii/boarding-pass**](https://github.com/mavinii/boarding-pass) - 搭乗券デザイン参考

すべての貢献者とテスターのサポートに感謝します！🙏

---

🎫 **One-boarding** ©Josh Zeng. Released under the MIT License.

[@Blog](https://linkyou.top/) · [@GitHub](https://github.com/cornjosh) · [Live Demo](https://one-boarding.linkyou.top/)