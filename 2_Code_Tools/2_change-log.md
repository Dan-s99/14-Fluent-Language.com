---
name: 2_change-log
description: Registro base para cambios ya cerrados en la capa técnica o en su documentación.
independence: Encapsulated
---

#   Change log

##    Iteration (2026-04-22 / service-page-brand-refresh-and-syllabus-expansion)

###    Objective

Ampliar la visibilidad del temario público de cursos, mejorar la inspección visual de los creativos y alinear la identidad pública del sitio con la marca de AgendaExperto.com.

###    Tasks

- [x] Reemplazar resúmenes temáticos cortos por nombres visibles de clases y módulos dentro del acordeón de `english-classes.html`.
- [x] Hacer expandibles las imágenes de los cursos mediante una interacción ligera compatible con el sitio estático.
- [x] Subir la portada del servicio a la zona superior de `english-classes.html`.
- [x] Reforzar la identidad visual compartida con una paleta base alineada al isotipo de `AgendaExperto.com`.
- [x] Homogeneizar el naming visible hacia `Orlando Lazos` y `English Classes`.
- [x] Actualizar la documentación técnica de `2_Code_Tools` para dejar trazabilidad de la iteración.

###    Changes

1. Se amplió la sección `#temarios` de `english-classes.html` para mostrar listados visibles de clases y módulos en el curso conversacional completo, el repaso gramatical, pronunciación, comprensión lectora y expresión oral y escrita.
2. Se reutilizó la documentación curricular existente del proyecto como fuente de verdad para los nombres visibles de las clases, en lugar de dejar resúmenes genéricos por bloque.
3. Se convirtieron los creativos de las tarjetas de cursos en disparadores de ampliación mediante botones con atributos `data-lightbox-*`.
4. Se agregó un `dialog` reutilizable para mostrar la imagen ampliada dentro de la misma página.
5. `styles.css` recibió estilos nuevos para `service-card__media`, `syllabus-grid`, `syllabus-card` y el lightbox responsivo.
6. `main.js` recibió `bindCourseLightbox()` para abrir y cerrar el lightbox, con fallback a nueva pestaña si `dialog.showModal()` no está disponible.
7. Se incorporó una primera versión de asset de marca para el header compartido y después se reemplazó por el asset real; más tarde se corrigió el problema de extensión creando un `.png` válido y, después del renombre manual del archivo, las páginas quedaron apuntando a `assets/images/isotipo_agendaExperto.com.png`.
8. `styles.css` cambió de una base cálida genérica a una paleta azul/navy alineada con `AgendaExperto.com`, con acento vino compatible con la portada del servicio.
9. `english-classes.html` subió la portada promocional al hero superior, reubicó el retrato de Orlando en la sección `#sobre-orlando` y añadió un desvanecido inferior en la imagen de portada.
10. La landing del servicio adoptó el naming visible `English Classes` y actualizó el branding visible de `Orlando` a `Orlando Lazos`.
11. Las tres páginas públicas dejaron el header con el nombre `AgendaExperto.com`, el slogan `La mejor solución al mejor precio.` y el link principal de navegación de regreso a `index.html`.
12. `index.html`, `orlando.html` y `english-classes.html` dejaron de apuntar al `.svg` mal etiquetado y ahora cargan el `.png` correcto del imagotipo.
13. `1_Directive_Notes/1_archetype.md`, `2_Code_Tools/1_archetype.md` y `1_Directive_Notes/0_documentation.md` se actualizaron para dejar documentado el rol público de `AgendaExperto.com` y el propósito de `Fluent Language.com`.

###    Notes

- Esta iteración ya mezcla dos frentes que terminaron convergiendo en la misma landing: expansión del temario visible y alineación visual/nominal de la experiencia pública.
- La identidad del repositorio y la identidad pública ya no son idénticas: el proyecto conserva historia ligada a `Fluent Language.com`, pero la web pública actual se presenta como `AgendaExperto.com`.

##    Iteration (2026-04-21 / course-card-image-fit-fix)

###    Objective

Corregir la presentación de los creativos promocionales dentro de la grilla de cursos para que no se vean recortados.

###    Tasks

- [x] Identificar la causa visual del recorte en las tarjetas de cursos.
- [x] Ajustar los estilos para mostrar las imágenes completas.

###    Changes

1. Se cambió la presentación visual de `.service-card` para manejar mejor la relación entre imagen y contenido.
2. Se reemplazó el recorte con `object-fit: cover` por una presentación con `object-fit: contain`.
3. Se eliminó el `aspect-ratio` forzado de las imágenes de cursos y se agregó padding interno para que el creativo respire mejor dentro de la tarjeta.

###    Notes

- La corrección se limitó a la grilla de cursos de `english-classes.html`.
- No se modificó el contenido comercial ni la estructura de navegación.

##    Iteration (2026-04-21 / marketplace-profile-service-restructure)

###    Objective

Reestructurar la web pública para pasar de una sola landing de servicio a un flujo real de marketplace, perfil y landing final de clases de inglés.

###    Tasks

- [x] Separar la experiencia pública en `index.html`, `orlando.html` y `english-classes.html`.
- [x] Reescribir el sistema visual compartido y la navegación móvil.
- [x] Rehacer la landing de inglés con copy más comercial y jerarquía más clara.
- [x] Integrar creativos promocionales relevantes dentro de la página del servicio.
- [x] Retirar la antigua fuente centralizada `content/site-data.js`.

###    Changes

1. `index.html` se convirtió en la portada de `AgendaExperto.com` como marketplace de expertos.
2. Se agregó `orlando.html` como perfil público intermedio de Orlando Lazos.
3. Se agregó `english-classes.html` como landing del servicio `Clases particulares de inglés`.
4. `styles.css` se rehízo como sistema visual compartido para las tres páginas.
5. `main.js` se simplificó para resolver navegación móvil, links activos y año del footer.
6. Se integraron creativos promocionales adicionales dentro de `assets/images`.
7. Se retiraron las secciones largas de FAQ y credenciales en la landing final, dejando la confianza resumida en formato compacto.

###    Notes

- La implementación quedó en HTML, CSS y JavaScript vanilla, sin backend ni framework.
- La verificación técnica se hizo con levantamiento local ligero usando Node.
- El árbol de trabajo ya tenía cambios ajenos fuera de `2_Code_Tools/website`; no fueron modificados desde esta iteración.

##    Iteration (2026-04-10 / initial-organization)

###    Objective

Crear el contenedor técnico para evitar mezclar documentación directiva con documentación de implementación.

###    Tasks

- [x] Crear `2_Code_Tools`.

###    Changes

1. Se dejó lista la carpeta técnica y sus documentos base.

###    Notes

- Aún no se detectaron notas técnicas específicas dentro del proyecto.
