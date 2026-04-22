---
name: 2_change-log
description: Registro base para cambios ya cerrados en la capa técnica o en su documentación.
independence: Encapsulated
---

#   Change log

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
