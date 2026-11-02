# SOLOS · hasta el amanecer — WebApp

Carpeta `solos` lista para subir al repositorio Pipeart/codigo-secreto.

## Archivos
- index.html: toda la web
- logo.png: logotipo con fondo transparente
- bg.jpg: fondo de la portada

## Subir a GitHub Pages
1. Entra en github.com/Pipeart/codigo-secreto → Add file → Upload files.
2. Arrastra la carpeta `solos` completa (o crea los archivos con la ruta solos/index.html, solos/logo.png, solos/bg.jpg). Commit changes.
3. Settings → Pages → Branch main, carpeta /(root) → Save (si ya lo tenías activo, no hace falta).
4. La web quedará en https://pipeart.github.io/codigo-secreto/solos/
5. Genera los 4 QR en https://pipeart.github.io/codigo-secreto/solos/#qr-generador

## Notas
- Los QR se generan dentro de la web, sin depender de internet. La dirección pública está en SITE_URL (index.html).
- El formulario es demo. Para recibir candidaturas, pon un endpoint (p. ej. Formspree) en FORM_ENDPOINT.
- El repositorio es público: no subas datos personales.
