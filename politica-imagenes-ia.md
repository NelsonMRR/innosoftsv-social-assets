# Política de imágenes generadas por IA — InnoSoftSV

**Actualizada 2026-09-02.** Reemplaza la regla anterior ("nunca IA"). La regla nueva, decidida por el usuario: **sí se admite IA, pero solo si la imagen cumple estrictamente con la especificación de abajo, verificada antes de publicar.** No es "genera algo con IA y ya" — es una barra de calidad alta y obligatoria.

## Regla obligatoria

Cualquier imagen generada por IA para redes sociales de InnoSoftSV **debe** generarse con el prompt exacto de abajo (o una variación que respete todos sus puntos), y **debe pasar el checklist de verificación** antes de subirse a `assets/branding/` o publicarse. Una imagen que no pase el checklist se descarta — no se "arregla" recortando o forzando su uso.

## Prompt maestro (usar tal cual, o adaptar el tema manteniendo cada instrucción de estilo)

```
Actúa como un Director de Arte y Fotógrafo Publicitario Senior especializado en tecnología B2B y SaaS.

Necesito crear una imagen para el catálogo de redes sociales (LinkedIn y Facebook) de mi empresa de software "InnoSoft SV". La imagen debe verse extremadamente profesional, humana y realista, sin ese aspecto "plástico" o "robótico" típico de la IA. Debe estar lista para que mi equipo de marketing le agregue texto encima después.

Instrucciones de Estilo Visual:

Estilo: Fotografía corporativa moderna, estilo "lifestyle" de negocios o "candid shot" (espontánea).

Iluminación: Iluminación natural de ventana, suave y cinematográfica.

Paleta de colores sutil: Integra discretamente detalles en tonos morado, azul marino y blanco (colores de la marca) en la ropa, tazas, o iluminación de fondo.

Composición: Deja "espacio negativo" (un área despejada, como una pared lisa o un escritorio limpio) a un lado para que yo pueda escribir texto publicitario después.

Técnica: Fotografía tomada con lente de 50mm, apertura f/1.8 (fondo suavemente desenfocado o efecto bokeh), calidad 8k, hiperrealista.

Regla de oro: NO agregues texto, letras flotantes, ni logotipos inventados. Mantén las pantallas de las computadoras con gráficos limpios y abstractos de estadísticas (Dashboards de UI modernos).
```

**Nota sobre la marca:** morado y azul marino son consistentes con la identidad real de InnoSoft — coincide con `og-icon.png` e `invoice-banner-dark.png`, ya en `assets/branding/`. Si se ajusta el tema del prompt (ej. "persona usando el POS en una tienda" en vez de escena de oficina genérica), mantener siempre esa paleta.

## Checklist de verificación obligatoria (antes de aceptar la imagen)

Marcar cada punto explícitamente — si algo falla, **descartar la imagen y volver a generar**, no usarla de todos modos:

- [ ] **¿Se ve "plástica" o robótica?** Piel con textura artificial/demasiado lisa, manos con número incorrecto de dedos, proporciones anatómicas raras, sonrisas forzadas o vacías → si hay cualquiera de estos, rechazar.
- [ ] **Regla de oro respetada:** sin texto flotante inventado, sin logotipos inventados o mal formados (la IA suele generar logos con letras ilegibles) → si aparece cualquier texto/logo generado, rechazar.
- [ ] **Pantallas de computadora:** gráficos abstractos de dashboard limpios, sin texto ilegible tipo "gibberish" (síntoma clásico de IA) → si el texto en pantalla es ilegible o sin sentido, rechazar o recortar esa parte fuera de encuadre.
- [ ] **Espacio negativo real y utilizable** para agregar texto publicitario después, sin taparse con elementos de la composición.
- [ ] **Paleta de marca presente pero sutil** — morado/azul marino/blanco en algún detalle (ropa, taza, luz de fondo), no forzado ni saturado.
- [ ] **Iluminación natural/cinematográfica**, no la luz plana o sobre-saturada típica de IA genérica.
- [ ] **Composición "candid"/espontánea**, no una pose rígida de stock photo genérico.
- [ ] **Coherencia con el contexto real de InnoSoftSV** — si la escena sugiere una oficina/equipo, no debe contradecir lo que sabemos que es real (ver `CLAUDE.md` — negocio pequeño, persona natural, no una corporación de 50 empleados). Evitar imágenes que impliquen una escala de operación que no existe.

## Cuándo usar esto vs. una captura real

- **Capturas reales de la app** (ver `README.md` de esta misma carpeta) siguen siendo la primera opción para cualquier post que muestre el producto en uso — son la prueba más fuerte y ya están probadas/funcionando.
- **Imágenes con este prompt** son para los casos donde no hay (y no puede haber) una captura real — ej. el post #5 del calendario (foto de "equipo/espacio de trabajo"), donde no se puede fotografiar algo que no existe físicamente todavía de esa forma, o para variar el contenido visual de la campaña sin depender solo de screenshots.
- Nunca usar una imagen de este tipo para representar el producto en sí (dashboards, POS, facturas) donde sí existe una captura real disponible — eso sigue prohibido, la captura real siempre gana.

## Quién genera la imagen

Claude (en este entorno) no tiene herramienta de generación de imágenes disponible. El usuario genera la imagen con la herramienta de IA que prefiera (Midjourney, DALL-E, etc.) usando el prompt de arriba, y la sube a `assets/branding/` siguiendo el mismo flujo de git ya documentado en `README.md`. Claude puede ayudar a verificar el checklist visualmente si se le comparte la imagen antes de publicarla.
