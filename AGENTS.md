---
name: AGENTS
description: Instrucciones agénticas locales complementarias para el workflow técnico y documental del proyecto.
independence: Loose
---

#   Workflow técnico local

##    Cierre documental obligatorio tras cambios de código

- Si una tarea modifica código, estructura técnica, estilos, comportamiento JavaScript, contenido renderizado públicamente o UI observable, `project-documentation` debe usarse como parte del cierre del turno y no solo como referencia de contexto.
- Cuando el cambio técnico sí deja modificaciones reales en archivos, antes de responder se debe revisar `2_Code_Tools` y actualizar lo que corresponda en esa misma intervención.
- `2_Code_Tools/2_change-log.md` se actualiza por default cuando la iteración técnica vigente ya dejó cambios reales.
- `2_Code_Tools/3_current-state.md` se actualiza cuando cambió el estado observable, la arquitectura visible, el comportamiento técnico o los artefactos reales del proyecto.
- `2_Code_Tools/4_project-evolution.md` se actualiza cuando el cambio revela un desfase documental, un riesgo nuevo, una tensión de mantenimiento o una lección operativa relevante.
- Si una intervención técnica no cambia el estado observable ni introduce tensiones nuevas, puede bastar con actualizar solo `2_change-log.md`.
- Solo se omite este cierre documental si no hubo cambios reales, si la intervención fue de cero impacto o si Orlando pide explícitamente no documentar.

##    Cómo registrar cambios técnicos

- La iteración vigente es, por default, la última iteración del `change log`.
- Si el agente hace cambios técnicos reales, debe registrar esos cambios dentro de la iteración vigente y no abrir una iteración nueva por su cuenta.
- El agente tampoco debe cerrar la iteración vigente por su cuenta; Orlando decide cuándo se cierra.
- Los cambios de un agente de IA no se registran a nivel de commit como objeto histórico independiente.
- El registro debe describir los cambios integrados dentro de la iteración o commit en curso, o sea, el trabajo real que quedó aplicado en el workspace actual.
- En `2_change-log.md`, la sección `Changes` siempre debe llenarse con los cambios hechos, en orden cronológico.
- Si hace falta, el agente también puede ajustar `Objective`, `Tasks` y `Notes` dentro de la iteración vigente para mantenerla fiel al trabajo actual.
- En `2_change-log.md`, evitar redacción centrada en `el commit hizo...` o `en este commit...`.
- Preferir redacción centrada en la intervención técnica real: qué se cambió, para qué, en qué archivos o comportamientos impactó y qué quedó pendiente dentro de la iteración vigente.

##    Checklist mínimo antes de cerrar una tarea técnica

- Confirmar si hubo cambio técnico real o solo exploración.
- Si hubo cambio real, ejecutar `project-documentation`.
- Actualizar `2_change-log.md` como mínimo dentro de la iteración vigente.
- Evaluar si también cambiaron `3_current-state.md` y `4_project-evolution.md`.
- Responder solo después de que ese cierre documental quede aplicado.
