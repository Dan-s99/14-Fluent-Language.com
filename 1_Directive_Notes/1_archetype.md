---
name: 1_archetype
description: Visión objetivo directiva para construir AgendaExperto.com como marketplace de perfiles profesionales accesibles, con English Classes de Orlando Lazos como primer servicio activo.
independence: Encapsulated
---

Este arquetipo define la visión objetivo del proyecto como sitio público de `AgendaExperto.com`, un marketplace ligero para conectar visitantes con profesionales y sus servicios. Dentro de esa estructura, `English Classes` de Orlando Lazos funciona hoy como el primer perfil y servicio activo. El repositorio sigue sirviendo para organizar la oferta, los materiales y la operación reusable que sostienen esa presencia pública.

#   Principles of cohesion and coupling / scope

##    Cohesion

- Definir la visión general del marketplace y de la documentación reusable que lo va a sostener.
- Describir cómo conviven la marca pública `AgendaExperto.com`, los perfiles profesionales y los servicios particulares dentro del mismo proyecto.
- Guiar la construcción del primer servicio activo, `English Classes`, sin perder de vista que el sitio debe escalar a más profesionales.
- Servir como marco para decisiones futuras de branding, marketing, metodología, materiales de clase, producto y operación comercial.

##    Coupling

- Se apoya en `5_marketing-glossary.md` para lenguaje comercial y de posicionamiento.
- Se apoya en `6_branding.md` para identidad, percepción y consistencia de marca.
- Se complementa con notas directivas futuras para metodología, currículo, ventas, gestión de alumnos, disponibilidad y recursos de clase.
- Se traduce a trabajo concreto dentro de `3_Files` cuando existan alumnos, expedientes, agendas, materiales o clases reales.

#   General vision

- `AgendaExperto.com` quiere funcionar como la portada pública para encontrar profesionales, revisar su perfil y entrar a sus servicios sin fricción.
- La página raíz pública seguirá usando `index.html` como entrada principal del dominio `agendexperto.com`; no hace falta renombrar ese archivo para expresar la marca.
- A corto plazo, la plataforma funciona como escaparate web accesible para perfiles profesionales; a mediano plazo debe poder integrar disponibilidad u horarios visibles por profesional.
- El primer caso activo del marketplace es Orlando Lazos, cuyo servicio visible hoy es `English Classes`.
- El posicionamiento comercial del sitio debe apoyarse en claridad, facilidad de contacto, precios comprensibles y presentación profesional de cada servicio.

#   Marketplace architecture

- La experiencia pública actual debe seguir una ruta simple de tres niveles:
  - `AgendaExperto.com`: portada general del marketplace.
  - `Perfil profesional`: página intermedia del profesional.
  - `Servicio`: landing dedicada del servicio activo.
- Cada profesional debe poder promocionar su negocio o servicio de una forma fácil y asequible.
- El diseño detallado del producto marketplace puede crecer después con un equipo dedicado, pero el arquetipo ya debe dejar clara esa arquitectura base.

#   Free profile baseline

- La versión gratuita del perfil profesional debe funcionar como un escaparate web básico.
- El perfil gratuito contempla:
  - foto principal de perfil;
  - foto de portada;
  - una descripción corta de hasta `50` palabras;
  - hasta `2` publicaciones sencillas, cada una con `1` imagen y hasta `50` palabras descriptivas.
- El perfil público debe priorizar claridad inmediata: quién es el profesional, qué ofrece y cómo contactarlo.
- La disponibilidad u horarios todavía no forman parte de la versión actual visible, pero sí pertenecen al roadmap natural del producto.

#   Current flagship service

- `English Classes` debe funcionar como la demostración más completa del modelo de perfil más servicio dentro de `AgendaExperto.com`.
- La propuesta se impartirá por videollamada, con preferencia operativa por `Zoom` y con `Google Meet` o `Microsoft Teams` como alternativas cuando convenga.
- El servicio estará orientado principalmente a alumnos hispanohablantes que necesitan aprender inglés para estudiar, trabajar o desenvolverse mejor en contextos bilingües.
- El posicionamiento comercial se apoyará en la experiencia real de Orlando como profesor de inglés y como profesional con experiencia en ambientes o roles bilingües.

#   Curriculum requirement

- El proyecto necesita formalizar un curso maestro de aproximadamente `60` a `80` clases.
- Cada clase debe ser utilizable en sesiones reales de `45` a `60` minutos, con opción de dejar tarea y extender práctica fuera de clase.
- Ese mismo curso maestro debe poder impartirse a ritmo intensivo, medio o gradual sin rehacer el contenido base.
- La fuente base del contenido debe ser preferentemente de alta calidad, con prioridad operativa por materiales de inglés americano útiles para preparar clases.

#   Immediate strategic priority

- La prioridad actual es consolidar una primera presencia pública coherente para `AgendaExperto.com` mientras se sigue formalizando el curso maestro de `English Classes`.
- Esa presencia pública debe dejar claro:
  - que `AgendaExperto.com` es el marketplace;
  - que Orlando Lazos es el primer perfil profesional activo;
  - que `English Classes` es el servicio visible más desarrollado.
- En paralelo, el proyecto debe seguir formalizando una fuente curricular de alta calidad para sostener el curso maestro y convertirlo en una propuesta cada vez más precisa de clases.
- La nota `7_curriculum-source-selection.md` registra la evaluación inicial de candidatos y la recomendación de fuente base.
- La nota `7,2_book-sources.md` concentra la búsqueda específica de libros fuente para usar como columna vertebral del curso maestro.
