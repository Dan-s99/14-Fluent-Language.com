---
name: 4_project-evolution
description: Documento base para contrastar visión, cambios y estado de la capa técnica.
independence: Encapsulated
---

#   Project evolution

- El contenedor técnico dejó de ser solo estructura documental y ya concentra una web pública funcional en formato estático.
- Durante la primera fase técnica, el proyecto pasó de una sola landing a una arquitectura pública de tres páginas con navegación real entre marketplace, perfil y servicio.
- La documentación técnica estaba desfasada respecto al estado real del sitio; esta actualización corrige ese desfase en `change log`, `current state` y este mismo documento.
- La iteración más reciente llevó la landing de inglés a una exposición comercial más concreta:
  - el temario público ahora muestra nombres de clases y módulos en vez de solo resúmenes por bloque;
  - los creativos de cursos ahora tienen una interacción de ampliación que mejora la inspección visual sin abandonar la página.
- La misma iteración también resolvió una tensión de identidad visual y naming:
  - la web pública ahora se alinea mejor con `AgendaExperto.com` como marca madre;
  - el header ya usa el imagotipo real y un slogan fijo en lugar de una identidad provisional;
  - el servicio ya expone arriba su portada comercial como pieza dominante;
  - el nombre visible del servicio quedó homogenizado como `English Classes`;
  - `Orlando Lazos` ya aparece de forma más consistente como nombre profesional.
- Hoy existe una correspondencia más clara entre estado real y documentación:
  - el `change log` ya registra la reestructura grande y la corrección visual más reciente;
  - el `change log` ya registra también la expansión del temario visible, el lightbox, el refresh de marca y la subida de la portada al hero;
  - el `current state` ya describe la web como artefacto técnico existente y el comportamiento visible más reciente;
  - este documento ya no parte de la premisa de “contenedor vacío”.
- Riesgos o tensiones actuales:
  - el contenido quedó distribuido entre varios HTML, así que futuras ediciones comerciales requerirán más disciplina manual;
  - la validación sigue siendo principalmente manual;
  - la capa técnica continúa sin build, sin tests y sin automatizaciones de publicación;
  - el workflow todavía puede dejar desfases documentales si la actualización de `2_Code_Tools` no se trata explícitamente como parte del cierre de cada iteración técnica;
  - la coexistencia entre marca de marketplace y estilos específicos por servicio ya exige criterio para no mezclar identidades visuales sin control.
- Si el sitio sigue creciendo, el siguiente contraste útil aquí será entre:
  - portabilidad estática actual;
  - necesidad futura de modularizar contenido;
  - necesidad futura de pruebas o tooling básico de publicación;
  - necesidad futura de volver obligatoria la documentación técnica de cierre como parte del workflow estándar;
  - necesidad futura de separar mejor tokens visuales globales del marketplace frente a variaciones visuales propias de cada servicio.
