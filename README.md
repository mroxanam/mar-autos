# 🚗 Mar-Autos (Automotores Ramos)

Este proyecto es una aplicación web moderna para la exhibición de autos usados, diseñada para ser rápida, visual y totalmente responsiva.

**🌐 Sitio Web en Vivo:** [https://mar-autos.vercel.app](https://mar-autos.vercel.app)

---

## 🛠️ Cómo se creó este proyecto

El proyecto fue inicializado en **2026** utilizando herramientas estándar de la industria para garantizar estabilidad y rendimiento.

### 1. Requisitos Previos
Para trabajar en este proyecto, necesitas tener instalado:
* [Node.js](https://nodejs.org) (Versión 18 o superior).
* [Git](https://git-scm.com) (Para el control de versiones y despliegue).

### 2. Comando de Creación Inicial
La base del proyecto se generó con el siguiente comando:
```bash
npx create-react-app mar-autos


3. Instalación de Dependencias Adicionales
Una vez creada la base, se instalaron las librerías necesarias para el diseño y funcionalidad:
bash
npm install bootstrap react-bootstrap react-icons react-router-dom framer-motion yet-another-react-lightbox react-transition-group


🚀 Comandos de Ejecución
Para Desarrollo Local
Si quieres ver los cambios mientras programas:
bash
npm start


La app se abrirá en http://localhost:3000.
Para Producción (Build)
Antes de subir a cualquier servidor manual, se genera la versión optimizada con:
bash
npm run build


🔄 Flujo de Trabajo y Actualización (Vercel)
El proyecto está configurado con Integración Continua. Esto significa que Vercel vigila tu repositorio de GitHub y actualiza la web automáticamente cuando detecta un cambio.
Pasos para actualizar la web:
Modifica el código o las fotos (Carpeta src para código, carpeta public para imágenes).
Sube los cambios:
bash
git add .
git commit -m "Descripción del cambio realizado"
git push origin main


📸 Notas sobre Archivos y Rutas
Para evitar errores en la visualización de fotos en Vercel:
Ubicación: Las fotos de los vehículos están en public/autos/.
Case Sensitivity: El servidor de Vercel es sensible a mayúsculas. Asegúrate de que si el archivo es .jpg, no pongas .JPG o .jpeg en el código.
Espacios: Nunca uses espacios en los nombres de archivos (Ejemplo: usa ford-ka.jpg en lugar de ford ka .jpg).
Referencia en React: Siempre usa la ruta absoluta: <img src="/autos/foto.jpg" />.
📋 Tecnologías Principales (Stack)
React 18: Librería principal de UI.
Bootstrap 5: Sistema de grillas y componentes visuales.
Framer Motion: Animaciones de entrada y transiciones suaves.
React Router Dom: Gestión de navegación interna sin recargar la página.
Documentación actualizada: Enero 2026
{content: }