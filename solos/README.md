# SOLOS · hasta el amanecer — WebApp v2.1

## Archivos
- index.html: toda la web (portada, secciones, casting, QR, frases a pantalla completa)
- logo.png: logotipo con fondo transparente
- bg.jpg: fondo de la portada
(los tres archivos deben estar juntos, en la raíz)

## Subir a GitHub Pages
1. Crea cuenta en github.com y pulsa New repository. Repositorio: Pipeart/codigo-secreto. Público. Create repository.
2. Pulsa "uploading an existing file", arrastra index.html, logo.png y bg.jpg (sueltos, sin carpeta) y Commit changes.
3. Settings → Pages → Branch: main, carpeta /(root) → Save.
4. En 1-2 minutos aparece la dirección: https://pipeart.github.io/codigo-secreto/
5. Abre https://pipeart.github.io/codigo-secreto/#qr-generador, descarga los 4 PNG de los QR y pruébalos con el móvil.

## Notas
- Los QR se generan dentro de la propia web (sin depender de internet). Si quieres fijar tu dirección pública, escríbela en SITE_URL dentro de index.html.
- El formulario es demo. Para recibir candidaturas, pon un endpoint (p. ej. Formspree) en FORM_ENDPOINT dentro de index.html.
- El logo de Netflix es una reproducción simple para presentación interna; sustitúyela por el recurso oficial si hay acuerdo.
