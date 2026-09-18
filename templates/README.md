# Plantillas de gráficas de marketing — HTML/CSS real, sin IA generativa

Creadas 2026-09-09 después de que el usuario señalara (con razón) que las capturas de pantalla crudas no funcionan como gancho de feed: texto chico e ilegible, sin titular, sin CTA, y a veces muestran datos en cero ("$0.00 Ventas hoy", "0 en tránsito") que comunican justo lo contrario de lo que se quiere vender.

**Por qué HTML/CSS en vez de un generador de imágenes por IA** (decisión explícita, ver conversación 2026-09-09): un generador de IA es exactamente donde aparecen los problemas que se quieren evitar — texto mal escrito, elementos ilógicos, look "generado". Una plantilla de código no tiene ese riesgo: o renderiza bien, o no renderiza. Además no depende de ninguna cuota/servicio externo de pago — se puede generar tantas veces como haga falta, gratis. Sigue cumpliendo la regla dura de `../politica-imagenes-ia.md`: no es un caso de imagen de IA, es diseño real + captura real.

## Las 3 plantillas

1. **`hero-con-captura.html`** — titular + subtítulo + captura real dentro de un mockup de navegador (barra con 3 puntos + label) + botón CTA + zona. Usa `.mockup-crop { height: Npx; overflow:hidden }` para recortar la captura desde arriba (evita mostrar cifras en cero que suelen estar más abajo en el dashboard real).
2. **`hero-con-captura-recorte-lateral.html`** — igual que la anterior, pero para capturas donde lo que interesa mostrar está a un lado (ej. panel de valor junto a un formulario de login). Usa `background-image` + `background-size`/`background-position` en vez de `<img>` para recortar con precisión de píxel desde cualquier borde — más control que `object-fit`.
3. **`tipografico-sin-captura.html`** — sin mockup ni captura, solo titular grande + subtítulo + CTA. Usar cuando no hay una captura real que refuerce el mensaje sin quedar forzada (ej. mensajes educativos/de concientización) — mejor ser honesto y no forzar un mockup que no aporta, que fabricar contenido o mostrar una pantalla con errores/estados a medio configurar.

## Tokens de marca (reutilizar siempre, no inventar colores nuevos sin que el usuario lo pida)
- Logo: **usar el archivo real `../logo-header.png`** (`<img src="../logo-header.png">`, alto ~52px) — nunca un cuadrado de CSS con gradiente como placeholder. Corregido 2026-09-17: el usuario señaló que el cuadrado gradiente "da la sensación de ser demasiado IA"; el logo real ya existe en `assets/branding/` (también `og-icon.png` 400×400 si se necesita solo el ícono cuadrado, y `logo-footer.png`).
- Texto: blanco `#fff` (titulares), `#cfc3e8`/`#b7a9d6` (subtítulos/secundario).
- Tamaño de lienzo: **1080×1080px** (funciona para Facebook e Instagram sin recortes raros).
- **Fondo: variar entre posts, nunca repetir el mismo siempre** (corrección 2026-09-17, el usuario notó que todas las imágenes se veían iguales). Paletas de fondo autorizadas, alternar según el post:
  - **Violeta (original):** `radial-gradient(circle at 85% 15%, rgba(255,178,107,0.35) 0%, rgba(255,178,107,0) 40%), radial-gradient(circle at 10% 90%, rgba(124,58,237,0.35) 0%, rgba(124,58,237,0) 45%), linear-gradient(160deg, #0d0620 0%, #170a30 55%, #0d0620 100%)`.
  - **Verde azulado/teal (agregado 2026-09-17):** `radial-gradient(circle at 85% 15%, rgba(255,178,107,0.4) 0%, rgba(255,178,107,0) 42%), radial-gradient(circle at 8% 92%, rgba(20,184,166,0.35) 0%, rgba(20,184,166,0) 45%), linear-gradient(160deg, #041b1a 0%, #0a2e2a 55%, #06120f 100%)`.
  - Al agregar una paleta nueva, mantener el glow coral en la esquina superior derecha (identidad visual constante) y solo variar el `linear-gradient` base + el segundo glow.

**Acento/CTA — dos variantes autorizadas, elegir según necesidad:**
- **Lavanda (original, 2026-09-09):** `linear-gradient(135deg, #c4a4f5, #7c3aed)`, radial glows en `rgba(196,164,245,*)`/`rgba(124,58,237,*)`, texto de acento `#d4c1f9`. Look "premium/tech" — usar si el post ya se ve bien así, sin motivo para cambiarlo.
- **Coral/ámbar (alto contraste, agregado 2026-09-14 a pedido del usuario):** `linear-gradient(135deg, #ffb26b, #ff5f6d)`, radial glow en `rgba(255,178,107,0.35)`, texto de acento `#ffb26b`. Motivo: el usuario señaló que el lavanda sobre fondo morado no destaca lo suficiente en el feed — el coral/ámbar da mucho más contraste contra el fondo oscuro sin perder la identidad (mismo fondo, mismo logo). **Usar esta variante por defecto en posts nuevos** hasta nueva indicación; la lavanda queda disponible para casos donde se prefiera el tono más sobrio (ej. LinkedIn muy formal, aunque el primer uso de coral ya fue en LinkedIn sin problema).

## Checklist de QA obligatorio antes de publicar CUALQUIER imagen (regla dura, 2026-09-17)

Consolidado tras el ejercicio de premortem del 2026-09-17 (ver `../../strategy/plan-crecimiento-2026-09.md`) — antes disperso entre esta página y la memoria de sesión, ahora es regla permanente del proyecto, sin importar si la imagen se hizo con las plantillas HTML/CSS de acá o con Canva:

1. **¿El logo es el archivo real, nunca un placeholder?** (ver regla de logo arriba — nunca un cuadrado de CSS ni un ícono genérico).
2. **¿Se midió el contraste del texto sobre cualquier fondo de color, no solo "se ve bien a ojo"?** Regla dura de color: **texto oscuro `#2b0a0a` sobre el acento coral** (nunca blanco — blanco sobre coral mide ~2.7:1, falla WCAG; oscuro mide 6.2–10.3:1). Sobre el fondo oscuro de marca, blanco o gris ≥`#9a9a9a` (≥7:1). Si se introduce un acento nuevo, calcular el contraste real (no asumir), no solo mirarlo.
3. **¿Hay algún dato en cero, campo vacío, o URL/cifra/cliente inventado?**
4. **¿El copy de la imagen coincide con el copy real del post/anuncio?**
5. **¿Se abrió la imagen a tamaño completo (no solo como miniatura) antes de darla por buena?** (ver `feedback_verify_images_full_size` en memoria — un cliente real reportó 4 imágenes rotas que se veían bien en miniatura).

Si algo falla en cualquiera de estos 5 puntos, no se publica — se corrige y se vuelve a generar.

## Generación con Canva (alternativa a las plantillas HTML/CSS, desde 2026-09-17)

Para piezas donde el usuario pidió explícitamente un nivel "premium" que las plantillas HTML/CSS no estaban alcanzando (ver historial abajo), usar el plugin Canva conectado (MCP `plugin:canva:canva`) en vez de estas plantillas. Flujo que funcionó:
1. `list-brand-kits` (todavía no hay brand kit de InnoSoftSV cargado en Canva — hasta que se cree, poner toda la dirección de marca en el prompt de `generate-design`: colores, copy real verbatim, "usar InnoSoftSV completo, nunca solo InnoSoft", "nunca inventar datos/URLs").
2. `generate-design` devuelve 4 candidatos — previsualizar los 4 (no asumir el primero) y descartar cualquiera con contenido fabricado (URLs placeholder tipo "reallygreatsite.com", texto inventado, colores fuera de marca).
3. `create-design-from-candidate` (herramienta legacy — solo si `create-design` no está en la lista de herramientas cargadas) para materializar el elegido.
4. Si hace falta 1080×1080 y el candidato no lo es, `resize-design` — pero el "Magic Resize" de Canva rompe el layout de forma confiable (escala X/Y no uniforme) — siempre reabrir la transacción después y recalcular posiciones a mano (`position_element`) en vez de confiar en el resultado automático.
5. Aplicar el checklist de QA de arriba igual que con las plantillas HTML/CSS — Canva no está exento.
6. `export-design` puede fallar "Not allowed to access design" justo después de un commit (delay de propagación) — reintentar sin `width`/`height` explícitos (export nativo) primero.

## Cómo generar una imagen nueva (plantillas HTML/CSS)
1. Copiar la plantilla más adecuada, ajustar titular/subtítulo/CTA/zona al copy real del post (nunca inventar cifras/clientes — mismas reglas que el copy, ver `../../catalog/productos-y-servicios.md`).
2. Si usa captura: `node embed-image.js plantilla.html ../2026-XX-XX-captura.png salida.html`.
3. Servir el HTML localmente (ej. un server estático simple en un puerto libre — `file://` no funciona con la extensión de Chrome) y renderizar a 1080×1080 con Playwright (`browser_resize` a 1080×1080 antes de cada screenshot — el viewport no persiste entre navegaciones) o con claude-in-chrome.
4. **Revisar visualmente antes de dar por bueno:** ¿se ve algún dato en cero o a medio configurar? ¿alguna URL o cifra inventada? ¿texto cortado en los bordes? ¿el mensaje del post y la imagen dicen lo mismo? Si algo falla, ajustar el crop/copy y volver a renderizar — nunca publicar con un fallo visual conocido.
5. Guardar el PNG final en `../` (la carpeta de assets) con nombre `YYYY-MM-DD-post-<slug>.png`, `git add/commit/push` desde `assets/branding/`, verificar con `curl -o /dev/null -w "%{http_code}"` que la URL raw responde 200.
6. Actualizar `imageUrl` del post correspondiente en `../../automation/scripts/calendar.json`.

## Historial
- 2026-09-09: primera generación — `2026-09-10-post-erp-dte.png` (ERP/DTE, dashboard real recortado para no mostrar "$0.00"), `2026-09-10-post-couriera.png` (panel de valor de la pantalla de login de Couriera, recorte lateral), `2026-09-10-post-dte-educativo.png` (tipográfico, sin captura — la real de factura DTE mostraba "DTE: PENDING" y una lista de configuración faltante, no servía).
- 2026-09-10: **corrección de dato falso.** El subtítulo de `hero-con-captura.html` decía "Vos mismo activás tu certificado ante Hacienda, sin depender de soporte técnico externo" — el usuario aclaró que es falso: es el equipo de InnoSoft quien configura el certificado y las credenciales de Hacienda por el cliente, porque a los clientes se les dificulta hacerlo solos. Se corrigió el subtítulo en el template (ahora hardcodeado con el mensaje correcto) y se volvió a renderizar `2026-09-10-post-erp-dte.png` con el mismo dashboard real (`2026-09-01-erp-dashboard.png`) — usado en post-7/post-7-ig, que todavía no se habían publicado. Ver `../../catalog/productos-y-servicios.md` y `../../QA-AUDIT.md` para el resto de lugares corregidos (bios de Facebook/Instagram/LinkedIn, `calendar.json`, `copy-final-lote1.md`, `strategy/`).
- 2026-09-14: **imagen de post-2 (LinkedIn) reemplazada + acento coral agregado.** La imagen anterior (`2026-09-01-config-dte-autoservicio.png`) era una captura cruda que además reforzaba el mensaje ya corregido de "autoservicio" — nunca debió quedar asignada a un post (regla 2b). Se generó `2026-09-14-post-linkedin-dte-contadores.png` con `tipografico-sin-captura.html`, copy dirigido a contadores/despachos (mismo hook que el post-2 real). Aprovechando el cambio, el usuario pidió colores que atraigan más la atención — se agregó la variante de acento coral/ámbar (ver tokens arriba) en vez de inventar una paleta nueva fuera de marca.
- 2026-09-17: **corrección de 3 feedbacks reales del usuario en una sola sesión, sobre `2026-09-17-ad-dte-zona-oriental.png` (imagen de campaña paga, no orgánica):**
  1. *"usa otro tipo de colores de fondo, sé variado, siempre los mismos"* — se agregó la paleta verde azulado/teal (ver tokens) como segunda opción de fondo, con la regla de alternar en vez de repetir siempre el violeta.
  2. *"lenguaje muy directo, amenazante"* — el copy original ("Tu negocio en Oriente ya debe emitir DTE ante Hacienda") sonaba a amenaza legal. Reescrito a un tono consultivo: titular "Facturación Electrónica DTE, sin complicaciones", CTA "Conversemos sobre tu negocio" en vez de un llamado a la urgencia/obligación. Aplicado también como el nuevo copy por defecto de `tipografico-sin-captura.html`.
  3. *"ese cuadro que pones antes de InnoSoft da la sensación de ser demasiado IA"* — el `.logo-mark` (cuadrado de CSS con gradiente, sin el logo real) se reemplazó en las 3 plantillas por el archivo real `../logo-header.png`. Nunca más usar un placeholder ahí, el logo real siempre estuvo disponible en `assets/branding/`.
