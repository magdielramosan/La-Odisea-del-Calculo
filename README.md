La Odisea del Cálculo
Juego narrativo educativo en 2D hecho con HTML, CSS y JavaScript vanilla, centrado en la historia del cálculo.

Descripción
En este juego seguimos a Alex, un estudiante universitario abrumado por su clase de cálculo. Tras quedarse dormido en el aula, emprende un viaje por distintas épocas para conocer a figuras clave en la construcción histórica del cálculo, entre ellas:

Arquímedes
Kepler
Cavalieri
Fermat
Wallis
Barrow
Newton
Leibniz
Euler
Lagrange
Cauchy
Weierstrass
La experiencia combina narrativa, elecciones, comprobaciones de comprensión y un códice histórico desbloqueable.

Características
Pantalla de inicio y sistema de continuar partida
Narrativa por capítulos
Códice o diario histórico
Guardado automático con localStorage
Personajes y fondos con sistema de imágenes reemplazables
Fallback visual automático si faltan imágenes
Diseño responsive para escritorio y adaptación razonable a móvil
Todo visible en español
Tecnologías usadas
HTML
CSS
JavaScript vanilla
No usa backend, frameworks ni build tools.

Cómo ejecutarlo
Solo necesitas abrir index.html en tu navegador.

También puedes usar una extensión como Live Server en Visual Studio Code para verlo localmente con recarga rápida.

Estructura del proyecto
index.html
style.css
script.js
README.md
assets/
  bg/
  characters/
Imágenes personalizadas
El juego está preparado para usar imágenes reales en lugar de placeholders.

Fondos
Coloca las imágenes dentro de:

assets/bg/
Ejemplos de nombres usados por el código:

classroom_day.png
greece_beach.png
fermat_study.png
royal_society.png
campus_evening.png
Personajes
Cada personaje va dentro de su propia carpeta en:

assets/characters/
Ejemplo:

assets/characters/alex/
  alex_thinking.png
  alex_surprised.png
  alex_inspired.png
Otro ejemplo:

assets/characters/newton/
  newton_neutral.png
  newton_teaching.png
  newton_serious.png
  newton_inspired.png
Si una imagen no existe, el juego usa automáticamente una versión generada por código.

Cómo publicar el juego
Como es un proyecto estático, puedes subirlo fácilmente a:

GitHub Pages
Netlify
Vercel
Objetivo del proyecto
Mostrar que el cálculo no apareció de forma repentina, sino como una construcción intelectual y humana desarrollada durante siglos para comprender el área, la tangencia, el movimiento, el infinito, la notación y el rigor.

Autor
Proyecto creado por Carlos Ramos usando ChatGPT como una experiencia narrativa interactiva y educativa sobre la historia del cálculo.
