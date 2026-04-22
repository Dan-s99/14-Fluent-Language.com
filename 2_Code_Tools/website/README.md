# AgendaExperto.com static landing

Landing estática para `Clases particulares de inglés con Orlando`, construida en HTML, CSS y JavaScript vanilla dentro de `2_Code_Tools/website/`.

## Qué contiene

- `index.html`: estructura base del sitio.
- `styles.css`: estilos visuales y responsive.
- `main.js`: render e interacciones ligeras.
- `content/site-data.js`: fuente de verdad del contenido comercial.
- `assets/images/`: imágenes públicas del sitio.
- `assets/credentials/`: PDFs de credenciales visibles.

## Cómo abrirla localmente

Opciones simples:

1. Abrir `index.html` directamente en el navegador.
2. O servir esta carpeta con un servidor estático mínimo, por ejemplo:

```powershell
cd 2_Code_Tools/website
python -m http.server 8000
```

Luego abrir `http://127.0.0.1:8000`.

## Cómo editar contenido

La mayor parte del copy vive en `content/site-data.js`.

Ahí se controlan:

- branding y hero
- cursos y módulos
- temarios
- metodología
- perfil de Orlando
- credenciales
- precios
- FAQ
- contacto

Si necesitas cambiar layout o estilo:

- estructura visual: `index.html`
- estilos: `styles.css`
- interacciones: `main.js`

## Publicación futura

Esta carpeta está pensada para seguir siendo portable.

Si después quieres subirla a GitHub Pages u otro hosting estático:

1. publicar el contenido de `website/` como raíz del sitio o dentro de la carpeta que use el hosting;
2. conservar rutas relativas;
3. actualizar solo los enlaces públicos si cambian dominio, WhatsApp, correo o Facebook.
