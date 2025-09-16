<div align="center">
  <h3><a href="https://github.com/cornjosh/one-boarding">One-boarding</a></h3>
  <em>실제 IATA BCBP QR 코드가 포함된 아름다운 맞춤형 탑승권 생성기</em>
</div>

<p align="center">
<img src="https://img.shields.io/github/stars/cornjosh/one-boarding?style=flat-square" alt="GitHub Stars"/>
<img src="https://img.shields.io/github/forks/cornjosh/one-boarding?style=flat-square" alt="GitHub Forks"/>
<img src="https://img.shields.io/github/issues/cornjosh/one-boarding?style=flat-square" alt="GitHub Issues"/>
<img src="https://img.shields.io/github/last-commit/cornjosh/one-boarding?style=flat-square" alt="GitHub last commit"/>
<img src="https://img.shields.io/github/license/cornjosh/one-boarding?style=flat-square" alt="GitHub License"/>
</p>

> 📝 **번역 상태**: 이 한국어 README는 현재 플레이스홀더입니다. 완전한 번역이 필요합니다.
> 
> 🎯 **라이브 미리보기**: [https://one-boarding.linkyou.top/](https://one-boarding.linkyou.top/)

---

[简体中文](/README_CN.md) | [English](/README.md) | [日本語](/README_JA.md) | [Français](/README_FR.md) | [Deutsch](/README_DE.md) | [Español](/README_ES.md) | [Русский](/README_RU.md)

---

## 프로젝트 개요 ✨

One-boarding은 실제 IATA Bar Coded Boarding Pass(BCBP) 표준을 준수하는 QR 코드가 포함된 아름답고 맞춤 설정 가능한 탑승권 인터페이스를 생성하는 오픈 소스 탑승권 생성기입니다. 14개 언어에 대한 포괄적인 국제화 지원을 제공합니다.

## 프로젝트 스크린샷 ✨

<div align="center">
    <img src="readme/main.png" alt="One-boarding 인터페이스" height="400px">
</div>

## 주요 기능 🎯

### ✈️ 탑승권 정보 표시
- [x] **항공편 정보**: 항공편 번호, 항공편 날짜, 출발 및 도착 공항
- [x] **승객 정보**: 승객명, 티켓 번호, 회원 ID, 회원 등급
- [x] **탑승 정보**: 탑승 시간, 캐빈 클래스 코드, 좌석 번호, 게이트
- [x] **QR 코드**: IATA BCBP 표준을 준수하는 실제 탑승 QR 코드

### 🌍 국제화 지원 (i18n)
이 프로젝트는 **14개 언어**를 지원하며 탑승권 페이지에서 언어 선택이 가능합니다.

#### 지원 언어
- **zh-Hans**: 简体中文 🇨🇳
- **zh-Hant**: 繁體中文 🇹🇼 
- **en-US**: English (United States) 🇺🇸
- **fr-FR**: Français (France) 🇫🇷
- **de-DE**: Deutsch (Deutschland) 🇩🇪
- **es-ES**: Español (España) 🇪🇸
- **pt-PT**: Português (Portugal) 🇵🇹
- **it-IT**: Italiano (Italia) 🇮🇹
- **ru-RU**: Русский (Россия) 🇷🇺
- **ja-JP**: 日本語 (日본) 🇯🇵
- **ko-KR**: 한국어 (대한민국) 🇰🇷
- **tr-TR**: Türkçe (Türkiye) 🇹🇷
- **pl-PL**: Polski (Polska) 🇵🇱
- **hu-HU**: Magyar (Magyarország) 🇭🇺

## 빠른 시작 🚀

### 설치 및 배포

1. **저장소 복제**:
   ```bash
   git clone https://github.com/cornjosh/one-boarding.git
   cd one-boarding
   ```

2. **로컬 실행**:
   ```bash
   # 브라우저에서 index.html 직접 열기
   open index.html
   
   # 또는 로컬 서버 사용
   python -m http.server 8000
   # http://localhost:8000 방문
   ```

3. **온라인 체험**:
   직접 방문: [https://one-boarding.linkyou.top/](https://one-boarding.linkyou.top/)

## 사용법
1. `index.html` 파일을 열어 브라우저에서 탑승권 페이지 보기
2. "데모 정보 사용" 버튼을 클릭하여 모달 대화상자 열기
3. 모달에 관련 정보를 입력하여 데이터가 포함된 탑승권 생성
4. 생성된 QR 코드는 IATA BCBP 표준을 준수하며 실제 탑승 확인에 사용 가능

## 호환성 🔧

최신 브라우저(Chrome, Firefox, Safari 등)에서 테스트되었습니다.

**시스템 요구사항:**
- 최신 브라우저 (Chrome 60+, Firefox 55+, Safari 12+, Edge 79+)
- JavaScript 지원
- 인터넷 연결 (폰트 및 리소스 로딩용)

## 기여 🤝

One-boarding 프로젝트에 대한 기여를 환영합니다!

### 💻 코드 기여
- 프로젝트 저장소 포크
- 기능 브랜치 생성
- 명확한 설명이 포함된 풀 리퀘스트 제출

## 감사의 말 💐

이 프로젝트는 다음의 훌륭한 프로젝트들로부터 영감과 도움을 받았습니다:

### 프로젝트 참고
- [**@georgesmith46/bcbp**](https://github.com/georgesmith46/bcbp) - IATA Bar Coded Boarding Pass 인코딩/디코딩 라이브러리
- [**@mavinii/boarding-pass**](https://github.com/mavinii/boarding-pass) - 탑승권 디자인 참고

모든 기여자와 테스터분들의 지원에 감사드립니다! 🙏

---

🎫 **One-boarding** ©Josh Zeng. Released under the MIT License.

[@Blog](https://linkyou.top/) · [@GitHub](https://github.com/cornjosh) · [Live Demo](https://one-boarding.linkyou.top/)