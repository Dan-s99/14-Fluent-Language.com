---
name: 1_archetype
description: Visión objetivo de la capa técnica para el sitio estático público de AgendaExperto.com.
independence: Encapsulated
---

Este arquetipo define hacia dónde debe apuntar la capa técnica del proyecto: un sitio estático portable, claro y fácil de mantener que presente `AgendaExperto.com` como marketplace, `orlando.html` como perfil profesional y lands dedicadas por servicio, empezando por `ingles-particular.html` y `contabilidad.html`.

#   Principles of cohesion and coupling / scope

##    Cohesion

- Definir cómo debería organizarse la capa técnica pública del sitio.
- Mantener una arquitectura simple de marketplace → perfil → servicio.
- Alinear la presentación visual del sitio con la marca `AgendaExperto.com` y con la creatividad propia de cada servicio cuando haga falta.

##    Coupling

- Debe reflejar el estado real del código, assets y herramientas cuando existan.
- Se apoya en `1_Directive_Notes/1_archetype.md` para la visión de producto y negocio.
- Se apoya en `2_Code_Tools/website/` como fuente de verdad del sitio público implementado.

#   Target architecture

- La entrada pública principal debe seguir siendo `index.html` como raíz del sitio.
- La navegación base debe conservar una portada general, un perfil profesional y lands dedicadas por servicio:
  - `index.html`: portada de `AgendaExperto.com`.
  - `orlando.html`: perfil profesional de Orlando Lazos.
  - `ingles-particular.html`: landing del servicio `Inglés particular`.
  - `contabilidad.html`: landing inicial del servicio `Contabilidad`.
- `index.html` debe poder alojar una sección breve de `About AgendaExperto.com` sin necesitar todavía una página separada.
- El sistema visual compartido debe vivir en `styles.css` y expresar primero la marca del marketplace.
- Los servicios individuales pueden agregar acentos visuales propios, siempre que no rompan la coherencia global del sitio.
- La capa técnica debe seguir siendo estática y portable mientras no exista una necesidad real de backend.

#   Future readiness

- La arquitectura debe poder crecer a más perfiles profesionales sin rehacer la navegación base.
- También debe quedar preparada para futuras vistas o módulos de disponibilidad y horarios.
- La capa pública del servicio `Inglés particular` debe poder mostrar una agenda futura con formulario para recopilar datos personales, aunque la conexión real a base de datos todavía no exista.
- Si el marketplace escala, la siguiente evolución técnica natural será modularizar mejor el contenido antes de introducir complejidad de infraestructura.
