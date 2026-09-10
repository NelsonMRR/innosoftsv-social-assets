# Branding — assets reales primero, IA solo si pasa control de calidad

Instrucción original del usuario (2026-09-01): las imágenes deben verse **reales**, no robóticas. **Actualizado 2026-09-02:** ahora se admite IA generativa, pero únicamente si se genera con el prompt maestro y pasa el checklist obligatorio de [`politica-imagenes-ia.md`](politica-imagenes-ia.md) — no es una excepción a la regla de calidad, es una vía adicional con la misma barra alta. Las capturas reales de la app siguen siendo la primera opción siempre que exista una disponible.

**Actualizado 2026-09-09 — regla permanente:** ninguna captura cruda va directo a un post. Toda imagen de marketing pasa antes por una plantilla de marca en [`templates/`](templates/) (titular + captura real recortada/embebida + CTA + zona) — ver `templates/README.md` para el proceso completo y la skill `.claude/skills/generar-imagen-post/`. Motivo: las capturas solas no tienen gancho/CTA y a veces muestran cifras en cero o pantallas a medio configurar.

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
5. Foto real de Nelson o del equipo trabajando (opcional pero de las que más generan confianza en B2B — "hay una persona real detrás de esto"). **Alternativa si no hay foto real disponible:** imagen generada con el prompt maestro de [`politica-imagenes-ia.md`](politica-imagenes-ia.md), verificada contra su checklist antes de usarla — ya usada como opción para el post #5 del calendario.

## Cómo capturarlas bien (para que no se vean como demo genérica)
- Usar datos de ejemplo con nombres de negocios ficticios pero creíbles (ej. "Ferretería Santa Ana", no "Test Company 123" ni "Lorem Ipresa").
- Preferir capturas con contenido real relevante a El Salvador (montos en dólares, direcciones salvadoreñas de ejemplo) sobre datos con apariencia genérica/extranjera.
- Recortar barra de navegador/URL si se ve localhost o un dominio de desarrollo.

## Dónde están alojadas — resuelto 2026-09-01
Los scripts de `../../automation/scripts/` (`publish-facebook.js`, `publish-instagram.js`) requieren que la imagen esté en una **URL pública** — no aceptan archivos locales. Se descartó usar `innosoft-landing` (acoplaría cada post publicado a un deploy del sitio en producción, con el proceso de 3-branch-sync + droplet-lock). En su lugar, esta misma carpeta (`assets/branding/`) es un **repositorio de git independiente y público**: [`NelsonMRR/innosoftsv-social-assets`](https://github.com/NelsonMRR/innosoftsv-social-assets). Meta solo necesita la URL una vez, al momento de publicar (no queda haciendo hotlinking permanente), así que GitHub raw es suficiente.

**URLs públicas ya verificadas (HTTP 200):**
- `https://raw.githubusercontent.com/NelsonMRR/innosoftsv-social-assets/main/og-icon.png`
- `https://raw.githubusercontent.com/NelsonMRR/innosoftsv-social-assets/main/logo-header.png`
- `https://raw.githubusercontent.com/NelsonMRR/innosoftsv-social-assets/main/logo-footer.png`
- `https://raw.githubusercontent.com/NelsonMRR/innosoftsv-social-assets/main/apple-touch-icon.png`
- `https://raw.githubusercontent.com/NelsonMRR/innosoftsv-social-assets/main/invoice-banner-dark.png`

**Flujo para agregar una imagen nueva (ej. una captura real de la app):**
```bash
cd F:\Dev\social-media\assets\branding
# copiar el archivo nuevo aquí, ej. 2026-09-03-erp-dashboard.jpg
git add .
git commit -m "Agrega captura real: dashboard ERP"
git push
# la URL pública queda en:
# https://raw.githubusercontent.com/NelsonMRR/innosoftsv-social-assets/main/2026-09-03-erp-dashboard.jpg
```
Esa URL es la que se pasa como `--image-url` a `publish-facebook.js` / `publish-instagram.js`.
