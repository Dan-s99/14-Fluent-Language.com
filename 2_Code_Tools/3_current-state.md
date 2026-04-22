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
  - `english-classes.html`: landing del servicio `English Classes`.
- `styles.css` concentra el sistema visual compartido entre las tres páginas.
- `main.js` resuelve comportamiento técnico ligero: navegación móvil, marcado de links activos, año del footer y lightbox de imágenes en la landing de cursos.
- `assets/images` ya contiene retrato, portada de branding, imagotipo del marketplace y creativos promocionales visibles en la landing de cursos.
- El header compartido ya usa el asset de marca desde `isotipo_agendaExperto.com.png`.
- El header compartido también ya fija dos piezas de marca consistentes en las tres páginas:
  - nombre visible `AgendaExperto.com`;
  - slogan `La mejor solución al mejor precio.`
- El primer link de navegación visible ya no dice `Inicio`; ahora regresa a `index.html` con la etiqueta `AgendaExperto.com`.
- La paleta base del sitio ya está alineada con la marca del marketplace:
  - azul brillante y navy como base principal;
  - acento vino para contraste y continuidad con la portada del servicio;
  - superficies frías y claras en lugar de la base cálida anterior.
- `english-classes.html` ya no muestra solo bloques resumidos en `#temarios`; ahora expone nombres visibles de clases y módulos para las rutas principales de estudio.
- Los creativos promocionales de la grilla de cursos en `english-classes.html` se pueden expandir al hacer clic:
  - si el navegador soporta `dialog`, la ampliación ocurre dentro de la misma página;
  - si no lo soporta, el fallback abre la imagen en una nueva pestaña.
- La portada promocional principal del servicio ahora aparece en la zona superior de `english-classes.html` como pieza dominante del hero.
- La portada principal del servicio ya tiene un desvanecido inferior para perderse visualmente antes del siguiente bloque.
- El retrato de Orlando ya no compite con la portada en el hero del servicio; ahora vive en la sección `#sobre-orlando`.
- El naming visible ya quedó más consistente:
  - `Orlando Lazos` como nombre del perfil profesional;
  - `English Classes` como nombre comercial visible del servicio.
- `assets/credentials` contiene los PDFs públicos usados como respaldo compacto de confianza.
- El contenido comercial principal ya no se alimenta desde una sola fuente JS; ahora vive directamente en los HTML públicos.
- La capa técnica sigue siendo estática y portable:
  - no hay backend;
  - no hay framework;
  - no hay pipeline de build;
  - no hay pruebas automatizadas.
- La verificación reciente se hizo mediante servido local ligero con Node y revisión manual del flujo público.
- El estado visual más reciente incluye dos ajustes visibles en la landing de cursos:
  - una corrección en la grilla para evitar que los creativos se recorten dentro de las tarjetas;
  - una ampliación del temario público y un mecanismo de expansión visual para los creativos.
