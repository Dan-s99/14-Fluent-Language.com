---
name: 2_change-log
description: Registro base para cambios ya cerrados en la capa técnica o en su documentación.
independence: Encapsulated
---

#   Change log

##    Iteration (2026-04-22 / service-page-brand-refresh-and-syllabus-expansion)

###    Objective

Ampliar la visibilidad del temario público de cursos, rediseñar la landing principal del servicio de inglés, incorporar el segundo servicio visible del perfil y alinear la experiencia pública con la arquitectura marketplace → perfil → servicio.

###    Tasks

- [x] Reemplazar resúmenes temáticos cortos por nombres visibles de clases y módulos dentro del acordeón de `english-classes.html`.
- [x] Hacer expandibles las imágenes de los cursos mediante una interacción ligera compatible con el sitio estático.
- [x] Subir la portada del servicio a la zona superior de `english-classes.html`.
- [x] Reforzar la identidad visual compartida con una paleta base alineada al isotipo de `AgendaExperto.com`.
- [x] Homogeneizar el naming visible hacia `Orlando Lazos` y `English Classes`.
- [x] Actualizar la documentación técnica de `2_Code_Tools` para dejar trazabilidad de la iteración.
- [x] Rediseñar la navegación pública para separar mejor marketplace, perfil profesional y servicio.
- [x] Migrar la landing principal del servicio de inglés a la ruta corta `ingles-particular.html`.
- [x] Incorporar `Servicios contables` como segundo servicio visible del perfil de Orlando.
- [x] Agregar `About AgendaExperto.com` como sección dentro de `index.html`.
- [x] Integrar la evaluación de nivel con examen de colocación a `$300 MXN`.
- [x] Dejar visible una referencia de formulario futuro en la sección `Agenda tu primera clase`.
- [x] Unificar la tipografía pública con `Montserrat` y suavizar el branding del header compartido.
- [x] Reconstruir el bloque de branding del header con `isotipo + nombre tipográfico` para evitar que el imagotipo se vea diminuto.
- [x] Retirar la ruta legacy `english-classes.html` para dejar una sola landing real del servicio de inglés.
- [x] Rediseñar la subnavegación sticky de `ingles-particular.html` para que conserve nombres reales de secciones con una apariencia más premium.
- [x] Agregar un aviso flotante temporal y cerrable para comunicar que la web ya funciona mientras sigue en perfeccionamiento.
- [x] Corregir el desborde responsive del hero de `ingles-particular.html` antes de publicación.

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
14. `index.html` dejó de usar WhatsApp en el menú global y ahora muestra branding, ruta actual y un botón hacia la sección `About AgendaExperto.com`.
15. `orlando.html` se rehízo como perfil profesional con dos servicios visibles: `Clases particulares de inglés` y `Servicios contables`.
16. La landing principal del servicio de inglés migró a `ingles-particular.html`, conservando `english-classes.html` solo como redirección de compatibilidad.
17. `ingles-particular.html` incorporó doble navegación, portada dominante sin difuminado, accesos rápidos laterales, evaluación de nivel, sección de agenda y FAQ.
18. `contabilidad.html` se agregó como landing inicial del segundo servicio visible del perfil.
19. `main.js` recibió soporte para el carrusel circular de accesos rápidos y para avisar cuando el CTA de agenda todavía no cuenta con formulario funcional.
20. `styles.css` recibió estilos nuevos para la barra global del marketplace, la subnavegación del profesional, las tarjetas rápidas, el switch de servicios, la sección de agenda y la nueva composición de hero.
21. `2_Code_Tools/1_archetype.md` ahora deja explícito que la visión técnica debe contemplar la sección `About AgendaExperto.com`, múltiples lands por servicio y un formulario futuro para `Agenda tu primera clase`.
22. `styles.css` sustituyó la mezcla `Fraunces` + `Space Grotesk` por una sola familia `Montserrat`, con pesos tipográficos diferenciados para títulos principales, títulos secundarios, navegación, botones, labels y texto corrido.
23. `index.html`, `orlando.html`, `ingles-particular.html` y `contabilidad.html` ahora cargan únicamente `Montserrat` desde Google Fonts para alinear la tipografía real de todas las páginas visibles.
24. El header compartido del marketplace recibió un ajuste fino de branding: se redujo la cápsula del imagotipo, se volvió más sobria la ruta central y se homogeneizó el peso tipográfico de navegación y CTAs.
25. El ajuste fino anterior se sustituyó por una corrección estructural del branding del header: las cuatro páginas públicas ahora usan el `isotipo` como símbolo, añaden `AgendaExperto.com` como nombre tipográfico visible y degradan el breadcrumb a una línea secundaria más discreta.
26. `styles.css` redefinió proporciones, borde y escala del bloque de marca para que el branding deje de verse como una miniatura dentro del menú y se acerque más a la referencia visual aprobada.
27. Se retiró `english-classes.html` del sitio estático para dejar `ingles-particular.html` como única landing real del servicio de inglés y se limpió la documentación técnica viva que todavía describía la compatibilidad temporal como parte del estado actual.
28. `ingles-particular.html` reemplazó la tira simple de links por una subnavegación sticky tipo carrusel con badge visual, flechas laterales, indicador inferior y CTA de `WhatsApp` integrado dentro del mismo módulo.
29. `styles.css` encapsuló este rediseño bajo `data-service-subnav` para que la estética nueva viva solo en la landing de inglés y no arrastre la subnavegación compartida de otras páginas del sitio.
30. `main.js` recibió `bindServiceSubnav()` para marcar la sección activa con `IntersectionObserver`, recentrar la pestaña actual, mover el carril con controles laterales y sincronizar una barra visual de progreso horizontal.
31. La zona superior de `ingles-particular.html` dejó de tratar portada y accesos rápidos como bloques separados: ahora la portada vive dentro de un wrapper expandido lateralmente y el carrusel de accesos quedó integrado justo debajo, sin encabezado descriptivo visible.
32. `styles.css` añadió `service-cover-stage`, elevó visualmente la `service-cover-frame` como tarjeta central flotante y usó capas decorativas, halo inferior y márgenes negativos controlados para lograr una expansión intermedia entre contenedor estándar y full-width.
33. `main.js` amplió `bindLoopTracks()` para sincronizar una barra de progreso visual con el desplazamiento real del carrusel rápido, de modo que la navegación horizontal deje de depender de la apariencia del scrollbar nativo.
34. `main.js` recibió `bindFloatingSiteNote()` para inyectar un aviso flotante temporal en `index.html`, `orlando.html` e `ingles-particular.html`, sin tocar la arquitectura estática ni exigir backend.
35. El aviso nuevo comunica que la web ya funciona y que la información esencial de las clases ya está publicada; al cerrarlo solo desaparece durante la vista actual y vuelve a mostrarse al cambiar de página o recargar.
36. `styles.css` recibió la segunda iteración visual del aviso flotante para acercarlo más a un anuncio amable: ahora es más grande, usa una composición tipo tarjeta promocional e incorpora una ilustración SVG más evidente sobre sitio en remodelación.
37. `styles.css` corrigió el desborde de la portada superior de `ingles-particular.html`: `service-cover-shell`, `service-cover-stage`, `service-cover-frame`, `hero-intro-grid`, `quick-nav`, `quick-nav__viewport` y `quick-nav__track` ahora pueden encogerse dentro del viewport sin que los carruseles internos impongan un ancho de más de 2000 px.

###    Notes

- Esta iteración ya mezcla dos frentes que terminaron convergiendo en la misma landing: expansión del temario visible y alineación visual/nominal de la experiencia pública.
- La identidad del repositorio y la identidad pública ya no son idénticas: el proyecto conserva historia ligada a `Fluent Language.com`, pero la web pública actual se presenta como `AgendaExperto.com`.
- El formulario real para capturar datos personales y conectar agenda o base de datos sigue pendiente; por ahora quedó visible como referencia de UX y registrado como necesidad futura.
- La consistencia tipográfica ahora depende de `styles.css` como única fuente de verdad visual; si después se agregan páginas nuevas, deben reutilizar la misma carga de `Montserrat`.
- El header ya no depende del imagotipo horizontal reducido; el branding principal del menú ahora descansa en `isotipo + wordmark tipográfico`, que resulta más resistente a tamaños pequeños.
- La limpieza de la ruta legacy privilegia una arquitectura más limpia dentro del sitio estático, pero deja de preservar por archivo la URL vieja `english-classes.html`.
- La subnavegación premium de la landing de inglés quedó intencionalmente encapsulada por atributo para evitar que un ajuste visual específico del servicio contamine las otras barras sticky del sitio.
- El aviso flotante quedó planteado como recurso temporal de UX; su cierre ya no persiste entre páginas, para que siga reapareciendo como recordatorio amable mientras el sitio continúa creciendo.
- El hero expandido de la landing de inglés debe conservar `min-width: 0` en sus contenedores intermedios; si se agregan nuevos carruseles o grids dentro de esa zona, hay que revisar que no vuelvan a dictar el ancho total del bloque.

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
