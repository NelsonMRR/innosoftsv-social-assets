# Plantillas de gráficas de marketing — HTML/CSS real, sin IA generativa

Creadas 2026-09-09 después de que el usuario señalara (con razón) que las capturas de pantalla crudas no funcionan como gancho de feed: texto chico e ilegible, sin titular, sin CTA, y a veces muestran datos en cero ("$0.00 Ventas hoy", "0 en tránsito") que comunican justo lo contrario de lo que se quiere vender.

**Por qué HTML/CSS en vez de un generador de imágenes por IA** (decisión explícita, ver conversación 2026-09-09): un generador de IA es exactamente donde aparecen los problemas que se quieren evitar — texto mal escrito, elementos ilógicos, look "generado". Una plantilla de código no tiene ese riesgo: o renderiza bien, o no renderiza. Además no depende de ninguna cuota/servicio externo de pago — se puede generar tantas veces como haga falta, gratis. Sigue cumpliendo la regla dura de `../politica-imagenes-ia.md`: no es un caso de imagen de IA, es diseño real + captura real.

## Las 3 plantillas

1. **`hero-con-captura.html`** — titular + subtítulo + captura real dentro de un mockup de navegador (barra con 3 puntos + label) + botón CTA + zona. Usa `.mockup-crop { height: Npx; overflow:hidden }` para recortar la captura desde arriba (evita mostrar cifras en cero que suelen estar más abajo en el dashboard real).
2. **`hero-con-captura-recorte-lateral.html`** — igual que la anterior, pero para capturas donde lo que interesa mostrar está a un lado (ej. panel de valor junto a un formulario de login). Usa `background-image` + `background-size`/`background-position` en vez de `<img>` para recortar con precisión de píxel desde cualquier borde — más control que `object-fit`.
3. **`tipografico-sin-captura.html`** — sin mockup ni captura, solo titular grande + subtítulo + CTA. Usar cuando no hay una captura real que refuerce el mensaje sin quedar forzada (ej. mensajes educativos/de concientización) — mejor ser honesto y no forzar un mockup que no aporta, que fabricar contenido o mostrar una pantalla con errores/estados a medio configurar.

## Tokens de marca (reutilizar siempre, no inventar colores nuevos)
- Fondo: `linear-gradient(160deg, #0d0620 0%, #170a30 55%, #0d0620 100%)` + radial glows en `rgba(196,164,245,*)` y `rgba(124,58,237,*)`.
- Acento/CTA: `linear-gradient(135deg, #c4a4f5, #7c3aed)`.
- Texto: blanco `#fff` (titulares), `#cfc3e8`/`#b7a9d6` (subtítulos/secundario), `#d4c1f9` (acentos de texto).
- Logo: cuadrado `40x40px`, `border-radius:10px`, mismo gradiente de acento.
- Tamaño de lienzo: **1080×1080px** (funciona para Facebook e Instagram sin recortes raros).

## Cómo generar una imagen nueva
1. Copiar la plantilla más adecuada, ajustar titular/subtítulo/CTA/zona al copy real del post (nunca inventar cifras/clientes — mismas reglas que el copy, ver `../../catalog/productos-y-servicios.md`).
2. Si usa captura: `node embed-image.js plantilla.html ../2026-XX-XX-captura.png salida.html`.
3. Servir el HTML localmente (ej. un server estático simple en un puerto libre — `file://` no funciona con la extensión de Chrome) y renderizar a 1080×1080 con Playwright (`browser_resize` a 1080×1080 antes de cada screenshot — el viewport no persiste entre navegaciones) o con claude-in-chrome.
4. **Revisar visualmente antes de dar por bueno:** ¿se ve algún dato en cero o a medio configurar? ¿alguna URL o cifra inventada? ¿texto cortado en los bordes? ¿el mensaje del post y la imagen dicen lo mismo? Si algo falla, ajustar el crop/copy y volver a renderizar — nunca publicar con un fallo visual conocido.
5. Guardar el PNG final en `../` (la carpeta de assets) con nombre `YYYY-MM-DD-post-<slug>.png`, `git add/commit/push` desde `assets/branding/`, verificar con `curl -o /dev/null -w "%{http_code}"` que la URL raw responde 200.
6. Actualizar `imageUrl` del post correspondiente en `../../automation/scripts/calendar.json`.

## Historial
- 2026-09-09: primera generación — `2026-09-10-post-erp-dte.png` (ERP/DTE, dashboard real recortado para no mostrar "$0.00"), `2026-09-10-post-couriera.png` (panel de valor de la pantalla de login de Couriera, recorte lateral), `2026-09-10-post-dte-educativo.png` (tipográfico, sin captura — la real de factura DTE mostraba "DTE: PENDING" y una lista de configuración faltante, no servía).
- 2026-09-10: **corrección de dato falso.** El subtítulo de `hero-con-captura.html` decía "Vos mismo activás tu certificado ante Hacienda, sin depender de soporte técnico externo" — el usuario aclaró que es falso: es el equipo de InnoSoft quien configura el certificado y las credenciales de Hacienda por el cliente, porque a los clientes se les dificulta hacerlo solos. Se corrigió el subtítulo en el template (ahora hardcodeado con el mensaje correcto) y se volvió a renderizar `2026-09-10-post-erp-dte.png` con el mismo dashboard real (`2026-09-01-erp-dashboard.png`) — usado en post-7/post-7-ig, que todavía no se habían publicado. Ver `../../catalog/productos-y-servicios.md` y `../../QA-AUDIT.md` para el resto de lugares corregidos (bios de Facebook/Instagram/LinkedIn, `calendar.json`, `copy-final-lote1.md`, `strategy/`).
