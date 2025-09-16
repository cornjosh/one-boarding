<div align="center">
  <h3><a href="https://github.com/cornjosh/one-boarding">One-boarding</a></h3>
  <em>Красивый настраиваемый генератор посадочных талонов с настоящими QR-кодами IATA BCBP</em>
</div>

<p align="center">
<img src="https://img.shields.io/github/stars/cornjosh/one-boarding?style=flat-square" alt="GitHub Stars"/>
<img src="https://img.shields.io/github/forks/cornjosh/one-boarding?style=flat-square" alt="GitHub Forks"/>
<img src="https://img.shields.io/github/issues/cornjosh/one-boarding?style=flat-square" alt="GitHub Issues"/>
<img src="https://img.shields.io/github/last-commit/cornjosh/one-boarding?style=flat-square" alt="GitHub last commit"/>
<img src="https://img.shields.io/github/license/cornjosh/one-boarding?style=flat-square" alt="GitHub License"/>
</p>

> 📝 **Статус перевода**: Этот русский README в настоящее время является заполнителем. Требуется полный перевод.
> 
> 🎯 **Живой просмотр**: [https://one-boarding.linkyou.top/](https://one-boarding.linkyou.top/)

---

[简体中文](/README_CN.md) | [English](/README.md) | [日本語](/README_JA.md) | [한국어](/README_KO.md) | [Français](/README_FR.md) | [Deutsch](/README_DE.md) | [Español](/README_ES.md)

---

## Обзор проекта ✨

One-boarding - это генератор посадочных талонов с открытым исходным кодом, который создает красивые, настраиваемые интерфейсы посадочных талонов с настоящими QR-кодами, соответствующими стандартам IATA Bar Coded Boarding Pass (BCBP). Предоставляет комплексную поддержку интернационализации для 14 языков.

## Скриншоты ✨

<div align="center">
    <img src="readme/main.png" alt="One-boarding Interface" height="400px">
</div>

## Основные функции 🎯

### ✈️ Отображение информации посадочного талона
- [x] **Информация о рейсе**: Номер рейса, дата рейса, аэропорты вылета и прилета
- [x] **Информация о пассажире**: Имя пассажира, номер билета, ID участника, уровень участника
- [x] **Информация о посадке**: Время посадки, код класса салона, номер места, выход
- [x] **QR-код**: Настоящие QR-коды посадки, соответствующие стандартам IATA BCBP

## Быстрый старт 🚀

### Установка и развертывание

1. **Клонировать репозиторий**:
   ```bash
   git clone https://github.com/cornjosh/one-boarding.git
   cd one-boarding
   ```

2. **Локальное выполнение**:
   ```bash
   # Открыть index.html напрямую в браузере
   open index.html
   
   # Или использовать локальный сервер
   python -m http.server 8000
   # Посетить http://localhost:8000
   ```

3. **Онлайн-опыт**:
   Посетить напрямую: [https://one-boarding.linkyou.top/](https://one-boarding.linkyou.top/)

## Совместимость 🔧

Протестировано в современных браузерах (Chrome, Firefox, Safari и т.д.).

**Системные требования:**
- Современные браузеры (Chrome 60+, Firefox 55+, Safari 12+, Edge 79+)
- Поддержка JavaScript
- Интернет-соединение (для загрузки шрифтов и ресурсов)

## Благодарности 💐

Этот проект был вдохновлен и поддержан следующими отличными проектами:

### Ссылки на проекты
- [**@georgesmith46/bcbp**](https://github.com/georgesmith46/bcbp) - Библиотека кодирования/декодирования IATA Bar Coded Boarding Pass
- [**@mavinii/boarding-pass**](https://github.com/mavinii/boarding-pass) - Справочник дизайна посадочного талона

Спасибо всем участникам и тестировщикам за их поддержку! 🙏

---

🎫 **One-boarding** ©Josh Zeng. Released under the MIT License License.

[@Blog](https://linkyou.top/) · [@GitHub](https://github.com/cornjosh) · [Live Demo](https://one-boarding.linkyou.top/)