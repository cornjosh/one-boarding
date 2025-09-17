<div align="center">
  <h1><a href="https://github.com/cornjosh/one-boarding">One-boarding</a></h1>
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
> 🤖 **Aviso de traducción**: Esta documentación ha sido traducida usando inteligencia artificial (LLM). Puede contener errores o imprecisiones. Se agradecen las correcciones y mejoras.
> 
> 🎯 **Vista previa en vivo**: [https://one-boarding.linkyou.top/](https://one-boarding.linkyou.top/)

---

[简体中文](/README_CN.md) | [English](/README.md) | [日本語](/README_JA.md) | [한국어](/README_KO.md) | [Français](/README_FR.md) | [Deutsch](/README_DE.md) | [Русский](/README_RU.md)

---

## Descripción del proyecto ✨

`One-boarding` genera interfaces hermosas y personalizables de tarjetas de embarque con códigos QR de embarque reales generados según el formato IATA Bar Coded Boarding Pass.

## Screenshots ✨

<div align="center">
    <img src="readme/main.png" alt="One-boarding Interface" height="400px">
</div>

## Características principales 🎯

### ✈️ Visualización de información de tarjeta de embarque
- [x] **Información de vuelo**: Número de vuelo, fecha de vuelo, aeropuertos de salida y llegada
- [x] **Información del pasajero**: Nombre del pasajero, número de boleto, ID de miembro, nivel de miembro
- [x] **Información de embarque**: Hora de embarque, código de clase de cabina, número de asiento, puerta
- [x] **Código QR**: Códigos QR de embarque reales conformes con los estándares IATA BCBP

### 🌍 Soporte de Internacionalización (i18n)
Este proyecto soporta **14 idiomas** con selección de idioma disponible en la página de tarjeta de embarque:

#### Idiomas Soportados
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

#### Métodos de Cambio de Idioma
1. **Detección automática**: Selecciona automáticamente el idioma basado en la configuración del navegador
2. **Parámetro URL**: Especifica el idioma usando `?lang=código-idioma`, ej., `?lang=en-US`
3. **Selector de página**: Usa el menú desplegable de idioma en la esquina superior derecha
4. **Almacenamiento local**: El idioma seleccionado se guarda en el navegador para futuras visitas

#### Contenido de Traducción
Toda la terminología aeronáutica relacionada con tarjetas de embarque está traducida profesionalmente según las convenciones regionales, incluyendo:
- Títulos de tarjetas de embarque y etiquetas de campos
- Terminología aeronáutica (número de vuelo, puerta, asiento, etc.)
- Etiquetas de formularios y texto de marcadores de posición
- Texto de botones y mensajes de notificación

### 🏗️ Características Técnicas
- [x] **Despliegue de archivo único**: Funcionalidad principal contenida en un solo archivo HTML para fácil despliegue
- [x] **Diseño responsivo**: Compatible con dispositivos de escritorio y móviles
- [x] **Vista previa en tiempo real**: Vista previa instantánea de tarjeta de embarque
- [x] **Información personalizada**: Soporte para personalizar todos los campos de la tarjeta de embarque
- [x] **Soporte de aerolíneas**: Soporte para logos de múltiples aerolíneas

## Estructura del Proyecto 📁

El proyecto usa una arquitectura minimalista con bibliotecas JavaScript externas y archivos de traducción JSON para internacionalización:

```
one-boarding/
├── index.html          # Archivo HTML principal que contiene el generador completo de tarjetas de embarque
├── js/
│   ├── i18n.js        # Implementación de internacionalización, maneja carga de idiomas y reemplazo de texto
│   ├── bcbp.min.js    # Biblioteca de generación de códigos QR IATA BCBP
│   └── qrcode.min.js  # Biblioteca de generación de códigos QR
├── locales/           # Archivos de traducción para cada idioma
│   ├── zh-Hans.json   # Chino simplificado
│   ├── en-US.json     # Inglés
│   └── ...            # Otros archivos de idioma
├── img/               # Archivos de logos de aerolíneas
│   ├── 3u.png        # Sichuan Airlines
│   ├── ca.png        # Air China
│   └── ...           # Otros logos de aerolíneas
└── readme/           # Recursos relacionados con README
    └── main.png      # Captura de pantalla del proyecto
```

## Inicio rápido 🚀

### Instalación y despliegue

1. **Clonar repositorio**:
   ```bash
   git clone https://github.com/cornjosh/one-boarding.git
   cd one-boarding
   ```

2. **Desarrollo local**:
   ```bash
   # Abrir index.html directamente en el navegador
   open index.html
   
   # O usar un servidor local
   python -m http.server 8000
   # Visitar http://localhost:8000
   ```

3. **Experiencia en línea**:
   Visitar directamente: [https://one-boarding.linkyou.top/](https://one-boarding.linkyou.top/)

### Instrucciones de Uso
1. Abrir el archivo `index.html` para ver la página de tarjeta de embarque en tu navegador
2. Hacer clic en el botón "Usar Información de Demostración" para abrir el diálogo modal
3. Introducir información relevante en el modal para generar una tarjeta de embarque con tus datos
4. Los códigos QR generados cumplen con los estándares IATA BCBP y pueden ser usados para verificación real de embarque

### Aerolíneas Personalizadas
El proyecto soporta logos para las siguientes aerolíneas:
- Sichuan Airlines (`3u`)
- Spring Airlines (`9c`) 
- Air China (`ca`)
- China Southern Airlines (`cz`)
- Hainan Airlines (`hu`)
- Xiamen Airlines (`mf`)
- China Eastern Airlines (`mu`)

Puedes agregar soporte para más aerolíneas añadiendo los archivos de logo correspondientes al directorio `img/`.

## Compatibilidad 🔧

Probado en navegadores modernos (Chrome, Firefox, Safari, etc.). Las versiones más antiguas de navegadores pueden experimentar problemas de estilo o funcionalidad.

**Requisitos del sistema:**
- Navegadores modernos (Chrome 60+, Firefox 55+, Safari 12+, Edge 79+)
- Soporte JavaScript
- Conexión a Internet (para cargar fuentes y recursos)

## Contribuciones 🤝

¡Las contribuciones al proyecto One-boarding son bienvenidas!

### 🐛 Reportes de Errores
- Crear un issue en GitHub describiendo el problema
- Incluir información de versión del navegador y sistema operativo
- Proporcionar pasos de reproducción y capturas de pantalla de errores

### 💡 Sugerencias de Características
- Proponer nuevas características o mejoras
- Explicar casos de uso y resultados esperados

### 🌍 Contribuciones de Traducción
- Ayudar a mejorar las traducciones de idiomas existentes
- Agregar soporte para nuevos idiomas
- Actualizar traducciones de documentación

### 💻 Contribuciones de Código
- Hacer fork del repositorio del proyecto
- Crear una rama de características
- Enviar un Pull Request con descripciones claras

## Hoja de Ruta de Desarrollo 📋

### Versión Actual (v2.0)
- [x] Agregado soporte de internacionalización con 14 opciones de idioma
- [x] Implementada generación de códigos QR estándar IATA BCBP
- [x] Optimización de diseño responsivo

### Planes Futuros
- [ ] Funcionalidad de compartir en WeChat
- [ ] Soporte para más logos de aerolíneas
- [ ] Versión de aplicación móvil
- [ ] Características de generación por lotes
- [ ] Temas personalizados y estilos

## Agradecimientos 💐

Este proyecto fue inspirado y ayudado por los siguientes proyectos excelentes:

### Referencias del proyecto
- [**@georgesmith46/bcbp**](https://github.com/georgesmith46/bcbp) - Biblioteca de codificación/decodificación IATA Bar Coded Boarding Pass
- [**@mavinii/boarding-pass**](https://github.com/mavinii/boarding-pass) - Referencia de diseño de tarjeta de embarque

¡Gracias especiales a todos los contribuyentes y probadores por su apoyo! 🙏

---

🎫 **One-boarding** ©Josh Zeng. Publicado bajo la Licencia MIT.

Creado y mantenido por Josh Zeng.

[@Blog](https://linkyou.top/) · [@GitHub](https://github.com/cornjosh) · [Demo en Vivo](https://one-boarding.linkyou.top/)