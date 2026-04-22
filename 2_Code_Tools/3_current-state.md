---
name: 3_current-state
description: Estado actual comprobable de la documentación técnica del proyecto.
independence: Encapsulated
---

#   Current state

- La capa técnica ya no está vacía: existe un sitio estático funcional dentro de `2_Code_Tools/website`.
- La experiencia pública actual está dividida en tres páginas reales:
  - `index.html`: portada de `AgendaExperto.com` como marketplace.
  - `orlando.html`: perfil público de Orlando Lazos.
  - `english-classes.html`: landing del servicio de clases particulares de inglés.
- `styles.css` concentra el sistema visual compartido entre las tres páginas.
- `main.js` resuelve comportamiento técnico ligero: navegación móvil, marcado de links activos y año del footer.
- `assets/images` ya contiene retrato, portada de branding y creativos promocionales visibles en la landing de cursos.
- `assets/credentials` contiene los PDFs públicos usados como respaldo compacto de confianza.
- El contenido comercial principal ya no se alimenta desde una sola fuente JS; ahora vive directamente en los HTML públicos.
- La capa técnica sigue siendo estática y portable:
  - no hay backend;
  - no hay framework;
  - no hay pipeline de build;
  - no hay pruebas automatizadas.
- La verificación reciente se hizo mediante servido local ligero con Node y revisión manual del flujo público.
- El estado visual más reciente incluye una corrección en la grilla de cursos para evitar que los creativos se recorten dentro de las tarjetas.
