# AgendaExperto.com static website

Sitio estático construido en HTML, CSS y JavaScript vanilla dentro de `2_Code_Tools/website/`.

## Estructura pública

- `index.html`: portada de `AgendaExperto.com` como marketplace.
- `orlando.html`: perfil público de Orlando Lazos.
- `ingles-particular.html`: landing principal del servicio `Clases particulares de inglés`.
- `contabilidad.html`: landing inicial del servicio `Servicios contables`.
- `styles.css`: sistema visual compartido y responsive.
- `main.js`: navegación móvil, marcado de links activos y año del footer.
- `assets/images/`: imágenes públicas, isotipo del marketplace y creativos promocionales.
- `assets/credentials/`: PDFs de credenciales resumidas dentro de la landing.

## Cómo abrirla localmente

1. Abrir `index.html` directamente en el navegador.
2. O servir la carpeta con un servidor estático mínimo:

```powershell
cd 2_Code_Tools/website
python -m http.server 8000
```

Luego abrir `http://127.0.0.1:8000`.

## Cómo editar contenido

El contenido ya no vive concentrado en una sola fuente JS.

- portada marketplace: `index.html`
- perfil Orlando: `orlando.html`
- landing `Inglés particular`: `ingles-particular.html`
- landing `Contabilidad`: `contabilidad.html`
- estilo compartido: `styles.css`
- interacciones base: `main.js`

## Publicación futura

La carpeta sigue siendo portable para hosting estático.

Si después quieres publicarla:

1. publica el contenido de `website/` como raíz del sitio;
2. conserva rutas relativas entre páginas y assets;
3. actualiza los enlaces públicos si cambian dominio, WhatsApp, correo o PDFs.
