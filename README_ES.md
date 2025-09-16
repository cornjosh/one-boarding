<div align="center">
  <h3><a href="https://github.com/cornjosh/one-boarding">One-boarding</a></h3>
  <em>Generador hermoso y personalizable de tarjetas de embarque con códigos QR IATA BCBP reales</em>
</div>

<p align="center">
<img src="https://img.shields.io/github/stars/cornjosh/one-boarding?style=flat-square" alt="GitHub Stars"/>
<img src="https://img.shields.io/github/forks/cornjosh/one-boarding?style=flat-square" alt="GitHub Forks"/>
<img src="https://img.shields.io/github/issues/cornjosh/one-boarding?style=flat-square" alt="GitHub Issues"/>
<img src="https://img.shields.io/github/last-commit/cornjosh/one-boarding?style=flat-square" alt="GitHub last commit"/>
<img src="https://img.shields.io/github/license/cornjosh/one-boarding?style=flat-square" alt="GitHub License"/>
</p>

> 📝 **Estado de traducción**: Este README en español es actualmente un marcador de posición. Se necesita una traducción completa.
> 
> 🎯 **Vista previa en vivo**: [https://one-boarding.linkyou.top/](https://one-boarding.linkyou.top/)

---

[简体中文](/README_CN.md) | [English](/README.md) | [日本語](/README_JA.md) | [한국어](/README_KO.md) | [Français](/README_FR.md) | [Deutsch](/README_DE.md) | [Русский](/README_RU.md)

---

## Descripción del proyecto ✨

One-boarding es un generador de tarjetas de embarque de código abierto que crea interfaces hermosas y personalizables de tarjetas de embarque con códigos QR reales que cumplen con los estándares IATA Bar Coded Boarding Pass (BCBP). Ofrece soporte de internacionalización integral para 14 idiomas.

## Características principales 🎯

### ✈️ Visualización de información de tarjeta de embarque
- [x] **Información de vuelo**: Número de vuelo, fecha de vuelo, aeropuertos de salida y llegada
- [x] **Información del pasajero**: Nombre del pasajero, número de boleto, ID de miembro, nivel de miembro
- [x] **Información de embarque**: Hora de embarque, código de clase de cabina, número de asiento, puerta
- [x] **Código QR**: Códigos QR de embarque reales conformes con los estándares IATA BCBP

## Screenshots ✨

<div align="center">
    <img src="readme/main.png" alt="One-boarding Interface" height="400px">
</div>

## Inicio rápido 🚀

### Instalación y despliegue

1. **Clonar repositorio**:
   ```bash
   git clone https://github.com/cornjosh/one-boarding.git
   cd one-boarding
   ```

2. **Ejecución local**:
   ```bash
   # Abrir index.html directamente en el navegador
   open index.html
   
   # O usar un servidor local
   python -m http.server 8000
   # Visitar http://localhost:8000
   ```

3. **Experiencia en línea**:
   Visitar directamente: [https://one-boarding.linkyou.top/](https://one-boarding.linkyou.top/)

## Compatibilidad 🔧

Probado en navegadores modernos (Chrome, Firefox, Safari, etc.).

**Requisitos del sistema:**
- Navegadores modernos (Chrome 60+, Firefox 55+, Safari 12+, Edge 79+)
- Soporte JavaScript
- Conexión a Internet (para cargar fuentes y recursos)

## Agradecimientos 💐

Este proyecto fue inspirado y ayudado por los siguientes proyectos excelentes:

### Referencias del proyecto
- [**@georgesmith46/bcbp**](https://github.com/georgesmith46/bcbp) - Biblioteca de codificación/decodificación IATA Bar Coded Boarding Pass
- [**@mavinii/boarding-pass**](https://github.com/mavinii/boarding-pass) - Referencia de diseño de tarjeta de embarque

¡Gracias a todos los contribuyentes y probadores por su apoyo! 🙏

---

🎫 **One-boarding** ©Josh Zeng. Released under the MIT License License.

[@Blog](https://linkyou.top/) · [@GitHub](https://github.com/cornjosh) · [Live Demo](https://one-boarding.linkyou.top/)