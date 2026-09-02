# Portfolio v3

Página personal de una sola pantalla: nombre en el centro y siluetas de partículas 3D
(gato, portátil, pizza) repartidas por el fondo, que flotan, se apartan del ratón y
cambian de forma cada pocos segundos. Un clic las cambia todas a la vez.

## Estructura

Sitio estático, sin build ni dependencias locales:

- `index.html`: toda la página.
- `favicon.ico` y `apple-touch-icon.png`.
- `files/`: el CV, en la misma ruta que tenía la web anterior.
- `vercel.json`: fuerza el preset "Other" en Vercel.

Dependencias por CDN:

- Three.js r128 desde cdnjs.
- Fuentes Syne e IBM Plex Mono desde Google Fonts.

## Probar en local

```sh
python3 -m http.server 8080
```

y abrir <http://localhost:8080>. Abrir el fichero directamente también funciona.

## Ajustes rápidos

Todo está en el `<script>` al final de `index.html`:

- **Colores**: variables CSS en `:root` y los `uColor*` del material.
- **Figuras**: funciones `cat`, `laptop` y `pizza`. Cada una es un dibujo 2D de canvas
  que se muestrea a partículas. Para añadir otra, dibuja una nueva y súmala a `kinds`.
- **Posiciones**: `layout`, en coordenadas normalizadas de -1 a 1.
- **Ritmo**: `MORPH_MS` (duración del cambio) y el rango de `rnd(6000, 14000)` en
  `endMorph` (espera entre cambios).
- **Enlaces**: el `<nav class="links">`.

## Desplegar

Vercel despliega este repo directamente: cada push a `main` publica en producción.
