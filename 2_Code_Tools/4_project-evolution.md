---
name: 4_project-evolution
description: Documento base para contrastar visión, cambios y estado de la capa técnica.
independence: Encapsulated
---

#   Project evolution

- El contenedor técnico dejó de ser solo estructura documental y ya concentra una web pública funcional en formato estático.
- Durante la primera fase técnica, el proyecto pasó de una sola landing a una arquitectura pública de tres páginas con navegación real entre marketplace, perfil y servicio.
- La documentación técnica estaba desfasada respecto al estado real del sitio; esta actualización corrige ese desfase en `change log`, `current state` y este mismo documento.
- Hoy existe una correspondencia más clara entre estado real y documentación:
  - el `change log` ya registra la reestructura grande y la corrección visual más reciente;
  - el `current state` ya describe la web como artefacto técnico existente;
  - este documento ya no parte de la premisa de “contenedor vacío”.
- Riesgos o tensiones actuales:
  - el contenido quedó distribuido entre varios HTML, así que futuras ediciones comerciales requerirán más disciplina manual;
  - la validación sigue siendo principalmente manual;
  - la capa técnica continúa sin build, sin tests y sin automatizaciones de publicación.
- Si el sitio sigue creciendo, el siguiente contraste útil aquí será entre:
  - portabilidad estática actual;
  - necesidad futura de modularizar contenido;
  - necesidad futura de pruebas o tooling básico de publicación.
