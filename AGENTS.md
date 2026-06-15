# AGENTS

## Scope

- Proyecto estático de una sola página para carta digital.
- Archivos principales: [index.html](index.html), [menu-data.js](menu-data.js) y [styles.css](styles.css).
- No hay build, framework ni dependencias locales; cualquier cambio debe seguir funcionando abriendo el HTML directamente.

## Work Rules

- Mantén los cambios mínimos y coherentes con el estilo existente.
- No añadas comentarios al código.
- No introduzcas texto de relleno, saludos ni formalismos en respuestas o contenido generado.
- Conserva la estructura actual del menú, los IDs `plato*` y el acordeón por sección salvo que el cambio requiera otra cosa.
- Evita nuevas dependencias, assets o archivos salvo necesidad clara.

## Editing Notes

- `menu-data.js` es la fuente de verdad para platos, precios, descripciones, alérgenos y suplementos.
- `index.html` solo debe contener la plantilla y la lógica de renderizado; si lo tocas, conserva el comportamiento exacto del acordeón.
- `styles.css` concentra toda la presentación visual; prioriza ajustes locales antes de reestructurar.
- El sitio depende de fuentes y una imagen remota; si los reemplazas, hazlo de forma intencional y consistente.

## Validation

- Para validar, abre la página y comprueba navegación visual, plegado de secciones y legibilidad en escritorio y móvil.
- Si añades lógica nueva, verifica que no rompa la carta ni el comportamiento del acordeón.
