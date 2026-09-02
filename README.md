# Branding — solo assets reales, nunca generados por IA

Instrucción explícita del usuario (2026-09-01): las imágenes de las publicaciones deben verse **reales**, no robóticas ni generadas por IA. Esta carpeta refleja esa regla: solo contiene diseño real del proyecto o va a contener fotos/capturas reales.

## Lo que ya hay (copiado de `innosoft-landing/public/`, diseño real de la marca)
- `og-icon.png` — ícono cuadrado de InnoSoft, sirve como foto de perfil/marca de agua.
- `logo-header.png` / `logo-footer.png` — logo con wordmark completo, para pie de posts.
- `apple-touch-icon.png` — versión cuadrada del ícono (ya usada como logo de la app de LinkedIn).
- `invoice-banner-dark.png` — banner de marca real con el logo y el tagline "Innovamos hoy, transformamos mañana", fondo morado de marca. Sirve como imagen de portada para posts introductorios/educativos que no requieren mostrar el producto en sí.

Estos son diseños reales ya usados en la landing page en producción (innosoftsv.com) — no son mockups ni placeholders.

## Lo que falta y solo lo puede generar el usuario (no Claude)
Para posts que muestran el producto en acción, la instrucción es usar **capturas de pantalla reales de la app corriendo**, no ilustraciones genéricas. Lista de capturas que se necesitan (ver `../../content-calendar/calendario.md` para qué post usa cuál):

1. **Dashboard del ERP** (`erp-crm-saas-ui`) mostrando el módulo de ventas o inventario con datos de prueba (no datos reales de clientes).
2. **Pantalla de configuración de credenciales DTE** (ERP → Configuración → Facturación DTE) — es el diferenciador real del producto (autoservicio), vale la pena mostrarlo tal cual.
3. **Factura DTE generada** (con datos de prueba/demo, nunca con NIT o datos reales de un cliente sin su autorización).
4. **Pantalla del POS** en uso (idealmente en una tablet/dispositivo real, foto del dispositivo con la pantalla encendida — más auténtico que un screenshot plano).
5. Foto real de Nelson o del equipo trabajando (opcional pero de las que más generan confianza en B2B — "hay una persona real detrás de esto").

## Cómo capturarlas bien (para que no se vean como demo genérica)
- Usar datos de ejemplo con nombres de negocios ficticios pero creíbles (ej. "Ferretería Santa Ana", no "Test Company 123" ni "Lorem Ipresa").
- Preferir capturas con contenido real relevante a El Salvador (montos en dólares, direcciones salvadoreñas de ejemplo) sobre datos con apariencia genérica/extranjera.
- Recortar barra de navegador/URL si se ve localhost o un dominio de desarrollo.

## Dónde se van a alojar para poder publicarlas
Los scripts de `../../automation/scripts/` (`publish-facebook.js`, `publish-instagram.js`) requieren que la imagen esté en una **URL pública** — no aceptan archivos locales. `innosoft-landing` ya es un sitio estático público (innosoftsv.com) — la opción más simple es subir las imágenes de posts ahí (ej. `/social/2026-09-08-erp-dashboard.jpg`) y usar esa URL pública al publicar. Esto requiere tocar el repo `innosoft-landing` (sitio en producción) — **pendiente de confirmación del usuario antes de hacerlo**, no se ha implementado todavía.
