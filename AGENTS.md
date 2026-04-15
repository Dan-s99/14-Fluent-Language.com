---
name: AGENTS
description: Instrucciones agénticas operativas del proyecto y reglas locales de trabajo documental.
independence: Loose
---

#   Instrucciones agénticas

##    Encapsulación de archivos Markdown

- Por default, `encapsular un archivo` significa moverlo a una carpeta contenedora dedicada.
- La forma fuerte de encapsulación es: la carpeta contenedora y el archivo comparten el mismo nombre completo, por ejemplo `6_How_do_branding.md\6_How_do_branding.md`.
- Si el archivo sigue compartiendo carpeta con otros archivos hermanos no dedicados, no se considera encapsulado.
- Un nombre contenedor que solo coincida parcialmente con el archivo puede servir como pista de relación, pero no sustituye la encapsulación dedicada salvo instrucción explícita.
- Cuando se encapsula un archivo que usa recursos auxiliares como imágenes, adjuntos o scripts, esos recursos deben vivir dentro de la misma carpeta contenedora para que el archivo pueda moverse junto con sus dependencias.
- Si una nota declara `independence: Encapsulated`, su estructura física debe respetar esta regla.
