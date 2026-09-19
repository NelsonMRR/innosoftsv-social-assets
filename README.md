# Branding — real assets first, AI only if it passes quality control

Original user instruction (2026-09-01): images must look **real**, not robotic. **Updated 2026-09-02:** generative AI is now allowed, but only if generated with the master prompt and passing the mandatory checklist in [`politica-imagenes-ia.md`](politica-imagenes-ia.md) — it's not an exception to the quality rule, it's an additional path with the same high bar. Real screenshots of the app remain the first choice whenever one is available.

**Updated 2026-09-09 — permanent rule:** no raw screenshot goes straight into a post. Every marketing image first goes through a brand template in [`templates/`](templates/) (headline + real cropped/embedded screenshot + CTA + zone) — see `templates/README.md` for the full process and the `.claude/skills/generar-imagen-post/` skill. Reason: screenshots alone have no hook/CTA and sometimes show zeroed-out figures or half-configured screens.

## What already exists (copied from `innosoft-landing/public/`, real brand design)
- `og-icon.png` — InnoSoft's square icon, works as a profile photo/watermark.
- `logo-header.png` / `logo-footer.png` — logo with full wordmark, for post footers.
- `apple-touch-icon.png` — square version of the icon (already used as the LinkedIn app logo).
- `invoice-banner-dark.png` — real brand banner with the logo and the tagline "Innovamos hoy, transformamos mañana" ("We innovate today, we transform tomorrow"), brand purple background. Works as a cover image for intro/educational posts that don't need to show the product itself.

These are real designs already in production on the live landing page (innosoftsv.com) — not mockups or placeholders.

## What's missing and only the user can generate it (not Claude)
For posts showing the product in action, the instruction is to use **real screenshots of the app actually running**, not generic illustrations. List of screenshots needed (see `../../content-calendar/calendario.md` for which post uses which):

1. **ERP dashboard** (`erp-crm-saas-ui`) showing the sales or inventory module with test data (never real customer data).
2. **DTE credentials configuration screen** (ERP → Settings → DTE Invoicing) — worth showing, but **never** describe it as "self-service" in the copy: in practice it's the InnoSoft team who uses it to configure the certificate and credentials on the client's behalf (corrected 2026-09-10, see `QA-AUDIT.md` and `../../catalog/productos-y-servicios.md`).
3. **Generated DTE invoice** (with test/demo data, never with a real customer's NIT or data without their authorization).
4. **POS screen** in use (ideally on a tablet/real device, a photo of the device with the screen on — more authentic than a flat screenshot).
5. A real photo of Nelson or the team at work (optional, but one of the strongest trust signals in B2B — "there's a real person behind this"). **Fallback if no real photo is available:** an image generated with the master prompt from [`politica-imagenes-ia.md`](politica-imagenes-ia.md), verified against its checklist before use — already used as the option for calendar post #5.

## How to capture them well (so they don't look like a generic demo)
- Use sample data with fictitious but believable business names (e.g. "Ferretería Santa Ana", not "Test Company 123" or "Lorem Ipresa").
- Prefer screenshots with content realistically relevant to El Salvador (dollar amounts, sample Salvadoran addresses) over generic/foreign-looking data.
- Crop out the browser bar/URL if it shows localhost or a dev domain.

## Where they're hosted — resolved 2026-09-01
The scripts in `../../automation/scripts/` (`publish-facebook.js`, `publish-instagram.js`) require the image to be at a **public URL** — they don't accept local files. Using `innosoft-landing` was ruled out (it would couple every published post to a production site deploy, with the 3-branch-sync + droplet-lock process). Instead, this same folder (`assets/branding/`) is an **independent, public git repository**: [`innosoftsv/innosoftsv-social-assets`](https://github.com/innosoftsv/innosoftsv-social-assets). Meta only needs the URL once, at publish time (it doesn't stay hotlinking it permanently), so GitHub raw is good enough.

**Public URLs already verified (HTTP 200):**
- `https://raw.githubusercontent.com/innosoftsv/innosoftsv-social-assets/main/og-icon.png`
- `https://raw.githubusercontent.com/innosoftsv/innosoftsv-social-assets/main/logo-header.png`
- `https://raw.githubusercontent.com/innosoftsv/innosoftsv-social-assets/main/logo-footer.png`
- `https://raw.githubusercontent.com/innosoftsv/innosoftsv-social-assets/main/apple-touch-icon.png`
- `https://raw.githubusercontent.com/innosoftsv/innosoftsv-social-assets/main/invoice-banner-dark.png`

**Workflow for adding a new image (e.g. a real app screenshot):**
```bash
cd F:\Dev\social-media\assets\branding
# copy the new file here, e.g. 2026-09-03-erp-dashboard.jpg
git add .
git commit -m "Add real screenshot: ERP dashboard"
git push
# the public URL becomes:
# https://raw.githubusercontent.com/innosoftsv/innosoftsv-social-assets/main/2026-09-03-erp-dashboard.jpg
```
That URL is what gets passed as `--image-url` to `publish-facebook.js` / `publish-instagram.js`.
