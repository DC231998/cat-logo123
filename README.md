# My English Notebook 🇬🇧

App interactiva para aprender inglés (hecha en HTML/CSS/JS puro, sin dependencias de build).

## Novedades vs. la versión de francés
- Idioma de estudio: **inglés** (interfaz en español).
- **4 niveles CEFR**: A1 (Beginner), A2 (Elementary), B1 (Intermediate), B2 (Upper-Intermediate) — 6 lecciones por nivel, 24 en total. Cada nivel se desbloquea al completar el anterior.
- **Logo** propio en el header (SVG) y como favicon.
- **Guardar y cargar progreso en JSON**: desde la pestaña "Progreso" puedes descargar tu avance como archivo `.json` (por si cambias de dispositivo o quieres respaldo) y volver a cargarlo con el botón "Cargar progreso".
- El progreso también se sigue guardando automáticamente en `localStorage` del navegador.

## Cómo usarla
Abre `index.html` en cualquier navegador. No requiere servidor ni instalación.

## Estructura
- `index.html` — estructura de la app
- `css/style.css` — estilos
- `js/data.js` — contenido de las lecciones por nivel
- `js/app.js` — lógica de la app (navegación, ejercicios, XP, JSON)
