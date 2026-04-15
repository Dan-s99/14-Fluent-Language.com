---
name: 2_change-log
description: Registro base para cambios estructurales o documentales ya cerrados dentro de la capa directiva.
independence: Encapsulated
---

#   Change log

##    Iteration (2026-04-10 / initial-organization)

###    Objective

Dejar una estructura documental mínima y mover materiales sueltos a un lugar con mejor cohesión.

###    Tasks

- [x] Crear `1_Directive_Notes`.
- [x] Crear `2_Code_Tools`.
- [x] Crear `3_Files`.
- [x] Reubicar materiales existentes.

###    Changes

1. Se creó la estructura base del proyecto.
2. Se movió el glosario reusable a `1_Directive_Notes`.
3. Se movieron tareas y archivos operativos a `3_Files`.

###    Notes

- Esta iteración dejó documentos marco mínimos sin desarrollar contenido de fondo.

##    Iteration (2026-04-13 / branding-note-encapsulation)

###    Objective

Encapsular la nota de branding y dejar sus imágenes dentro del mismo contenedor para no depender de URLs externas.

###    Tasks

- [x] Crear un contenedor dedicado para `6_How_do_branding.md`.
- [x] Mover la nota a una ruta encapsulada.
- [x] Descargar las imágenes embebidas y relocalizarlas dentro del contenedor.

###    Changes

1. La nota quedó encapsulada en `6_How_do_branding.md/6_How_do_branding.md`.
2. Las imágenes externas se guardaron en `6_How_do_branding.md/images/`.
3. El Markdown dejó de depender de `images.openai.com`.

###    Notes

- Las URLs originales respondían al momento de la verificación, pero solo mostraban cache HTTP temporal y no una garantía de permanencia documental.
