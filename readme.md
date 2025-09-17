<div align="center">
  <img src="readme/main.png" alt="One-boarding" height="200px">
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

<h5 align="center">One-boarding 是一个开源的登机牌生成器，可以创建美观、自定义的登机牌界面，包含真实可用的乘机二维码（基于 IATA Bar Coded Boarding Pass 标准）。支持14种语言的国际化界面。</h5>

> 🎯 **快速预览**: [https://one-boarding.linkyou.top/](https://one-boarding.linkyou.top/)

---

[English](/README_EN.md) | [日本語](/README_JA.md) | [한국어](/README_KO.md) | [Français](/README_FR.md) | [Deutsch](/README_DE.md) | [Español](/README_ES.md) | [Русский](/README_RU.md)

---

## 项目概述 ✨
`one-boarding` 可用于生成一个美观、自定义的登机牌界面，包含真实可用的乘机二维码（根据 IATA Bar Coded Boarding Pass 格式生成）

## 功能特性 🎯

### ✈️ 登机牌信息展示
- [x] **航班信息**：显示航班号、航班日期、出发机场和到达机场的信息
- [x] **乘客信息**：包括乘客姓名、票号、会员ID 和会员等级等信息
- [x] **登机信息**：显示登机时间、舱位代码、座位号和登机口等信息
- [x] **二维码**：生成真实可用的乘机二维码（符合 IATA BCBP 标准）

### 🌍 国际化支持 (i18n)
本项目支持 **14 种语言**，可在登机牌页面选择不同的显示语言：

#### 支持的语言
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

#### 语言切换方式
1. **自动检测**: 根据浏览器语言自动选择对应语言
2. **URL参数**: 通过 `?lang=language-code` 指定语言，如 `?lang=en-US`
3. **页面选择器**: 使用页面右上角的语言选择下拉框
4. **本地存储**: 选择的语言会保存在浏览器中，下次访问时自动应用

#### 翻译内容
所有登机牌相关的航空术语都根据各地区的习惯进行了专业翻译，包括：
- 登机牌标题和字段标签
- 航空术语（航班号、登机口、座位等）
- 表单标签和占位符文本
- 按钮文本和提示信息

### 🏗️ 技术特性
- [x] **单文件部署**: 主要包含单一 HTML 文件，方便部署
- [x] **响应式设计**: 适配桌面和移动设备
- [x] **实时预览**: 即时查看登机牌效果
- [x] **自定义信息**: 支持自定义所有登机牌字段
- [x] **航司支持**: 支持多家航空公司logo显示

## 项目结构
项目主要包含单一 `html` 文件，方便部署

### 文件说明
- `index.html`：主要的 HTML 文件，包含页面的整体结构、登机牌信息展示以及简易的信息输入框
- `js/i18n.js`：国际化功能实现，处理语言加载和文本替换
- `js/bcbp.min.js` 和 `js/qrcode.min.js`：第三方库
- `locales/*.json`：各语言的翻译文件
- `img/*`：航司 logo

## 页面功能
### 登机牌信息展示
- **航班信息**：显示航班号、航班日期、出发机场和到达机场的信息
- **乘客信息**：包括乘客姓名、票号、会员ID 和会员等级等信息
- **登机信息**：显示登机时间、舱位代码、座位号和登机口等信息
- **二维码**：生成真实可用的乘机二维码

## 使用方法
1. 克隆或下载本项目到本地
2. 打开 `index.html` 文件，即可在浏览器中查看登机牌页面
3. 点击“使用演示信息”按钮可以弹出模态框，在模态框中输入相关信息，即可生成包含信息的 `url`

## 注意事项
- 页面中的图片路径需要根据实际情况进行调整，确保logo文件存在于正确的路径下。当前支持四川航空`3u`、春秋航空`9c`、中国国际航空`ca`、中国南方航空`cz`、海南航空`hu`、厦门航空`mf`、中国东方航空`mu`，可自行添加。

## TODO
- 分享到微信

## 兼容性
在现代浏览器（如 Chrome、Firefox、Safari 等）中进行了测试。旧版本的浏览器中可能会出现样式或功能问题

## 更新记录
- **v2.0**: 添加了国际化支持，支持14种语言切换