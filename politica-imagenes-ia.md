# AI-generated image policy — InnoSoftSV

**Updated 2026-09-02.** Replaces the previous rule ("never AI"). New rule, decided by the user: **AI is allowed, but only if the image strictly meets the spec below, verified before publishing.** This isn't "generate something with AI and be done" — it's a high, mandatory quality bar.

## Mandatory rule

Any AI-generated image for InnoSoftSV's social media **must** be generated with the exact prompt below (or a variation that respects every one of its points), and **must pass the verification checklist** before being uploaded to `assets/branding/` or published. An image that fails the checklist is discarded — it does not get "fixed" by cropping or forced into use anyway.

## Master prompt (use as-is, or adapt the subject while keeping every style instruction)

```
Act as a Senior Art Director and Advertising Photographer specialized in B2B tech and SaaS.

I need to create an image for the social media catalog (LinkedIn and Facebook) of my software company "InnoSoft SV". The image must look extremely professional, human, and realistic, without the "plastic" or "robotic" look typical of AI. It must be ready for my marketing team to add text on top afterward.

Visual Style Instructions:

Style: Modern corporate photography, "lifestyle" business style or "candid shot" (spontaneous).

Lighting: Natural window light, soft and cinematic.

Subtle color palette: Discreetly integrate details in purple, navy blue, and white tones (brand colors) in clothing, mugs, or background lighting.

Composition: Leave "negative space" (a clear area, like a plain wall or a clean desk) on one side so I can add advertising text afterward.

Technique: Photo taken with a 50mm lens, f/1.8 aperture (softly blurred background or bokeh effect), 8k quality, hyperrealistic.

Golden rule: DO NOT add text, floating letters, or invented logos. Keep computer screens showing clean, abstract statistics graphics (modern UI dashboards).
```

**Note on the brand:** purple and navy blue are consistent with InnoSoft's real identity — matches `og-icon.png` and `invoice-banner-dark.png`, already in `assets/branding/`. If the prompt's subject is adjusted (e.g. "person using the POS in a store" instead of a generic office scene), always keep that palette.

## Mandatory verification checklist (before accepting the image)

Check each point explicitly — if anything fails, **discard the image and regenerate**, don't use it anyway:

- [ ] **Does it look "plastic" or robotic?** Artificial/overly smooth skin texture, hands with the wrong number of fingers, odd anatomical proportions, forced or empty smiles → if any of these appear, reject.
- [ ] **Golden rule respected:** no invented floating text, no invented or malformed logos (AI tends to generate logos with illegible letters) → if any generated text/logo appears, reject.
- [ ] **Computer screens:** clean abstract dashboard graphics, no illegible "gibberish" text (a classic AI tell) → if the on-screen text is illegible or nonsensical, reject or crop that part out of frame.
- [ ] **Real, usable negative space** to add advertising text afterward, not covered by composition elements.
- [ ] **Brand palette present but subtle** — purple/navy/white in some detail (clothing, mug, background light), not forced or saturated.
- [ ] **Natural/cinematic lighting**, not the flat or oversaturated light typical of generic AI.
- [ ] **"Candid"/spontaneous composition**, not a rigid generic stock-photo pose.
- [ ] **Consistency with InnoSoftSV's real context** — if the scene suggests an office/team, it must not contradict what we know is real (see `CLAUDE.md` — small business, sole proprietor, not a 50-employee corporation). Avoid images that imply a scale of operation that doesn't exist.

## When to use this vs. a real screenshot

- **Real app screenshots** (see this folder's `README.md`) remain the first choice for any post showing the product in use — they're the strongest, already-proven evidence.
- **Images from this prompt** are for cases where a real screenshot doesn't exist (and can't exist) — e.g. calendar post #5 (a "team/workspace" photo), where you can't photograph something that doesn't physically exist yet in that form, or to vary the campaign's visual content without relying solely on screenshots.
- Never use an image of this type to represent the product itself (dashboards, POS, invoices) where a real screenshot is available — that's still prohibited, the real screenshot always wins.

## Who generates the image

Claude (in this environment) doesn't have an image-generation tool available. The user generates the image with whichever AI tool they prefer (Midjourney, DALL-E, etc.) using the prompt above, and uploads it to `assets/branding/` following the same git workflow already documented in `README.md`. Claude can help verify the checklist visually if the image is shared before publishing.
