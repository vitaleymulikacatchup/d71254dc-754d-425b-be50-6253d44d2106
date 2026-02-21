import type { PrimaryButtonStyleVariant } from "../config/types";

export const primaryButtonStyleMap: Record<PrimaryButtonStyleVariant, string> = {
  gradient: `
    background: linear-gradient(to bottom, color-mix(in srgb, var(--color-primary-cta) 75%, transparent), var(--color-primary-cta));
    box-shadow: color-mix(in srgb, var(--color-background) 25%, transparent) 0px 1px 1px 0px inset, color-mix(in srgb, var(--color-primary-cta) 15%, transparent) 3px 3px 3px 0px;
  `,
  shadow: `
    background: var(--color-primary-cta);
    box-shadow: 2.10837px 3.16256px 9.48767px color-mix(in srgb, var(--color-primary-cta) 40%, transparent);
  `,
  flat: `
    background: var(--color-primary-cta);
    box-shadow: none;
  `,
  "radial-glow": `
    background:
      radial-gradient(circle at 0% 0%, color-mix(in srgb, var(--color-background) 32.5%, transparent) 0%, transparent 45%),
      radial-gradient(circle at 100% 100%, color-mix(in srgb, var(--color-background) 32.5%, transparent) 0%, transparent 45%),
      var(--color-primary-cta);
    box-shadow: 2.10837px 3.16256px 9.48767px color-mix(in srgb, var(--color-accent) 30%, transparent);
  `,
  "diagonal-gradient": `
    background: linear-gradient(to bottom right, color-mix(in srgb, var(--color-primary-cta) 80%, transparent), var(--color-foreground));
    box-shadow: 2.10837px 3.16256px 9.48767px color-mix(in srgb, var(--color-accent) 30%, transparent);
  `,
  "inset-glow": `
    background: var(--color-primary-cta);
    box-shadow: color-mix(in srgb, var(--color-background) 15%, transparent) 0px 0px 20px 1.64px inset, color-mix(in srgb, var(--color-foreground) 13%, transparent) 0px 0.839802px 0.503881px -0.3125px, color-mix(in srgb, var(--color-foreground) 13%, transparent) 0px 1.99048px 1.19429px -0.625px, color-mix(in srgb, var(--color-foreground) 13%, transparent) 0px 3.63084px 2.1785px -0.9375px, color-mix(in srgb, var(--color-foreground) 13%, transparent) 0px 6.03627px 3.62176px -1.25px, color-mix(in srgb, var(--color-foreground) 13%, transparent) 0px 9.74808px 5.84885px -1.5625px, color-mix(in srgb, var(--color-foreground) 13%, transparent) 0px 15.9566px 9.57398px -1.875px, color-mix(in srgb, var(--color-foreground) 13%, transparent) 0px 27.4762px 16.4857px -2.1875px, color-mix(in srgb, var(--color-foreground) 13%, transparent) 0px 50px 30px -2.5px;
  `,
  "double-inset": `
    background: var(--color-primary-cta);
    box-shadow: color-mix(in srgb, var(--color-background) 15%, transparent) 0px 4px 10px 0px inset, color-mix(in srgb, var(--color-background) 15%, transparent) 0px -4px 8px 0px inset;
  `,
  "primary-glow": `
    background: var(--color-primary-cta);
    box-shadow: color-mix(in srgb, var(--color-background) 20%, transparent) 0px 3px 1px 0px inset, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 0.839802px 0.503881px -0.3125px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 1.99048px 1.19429px -0.625px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 3.63084px 2.1785px -0.9375px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 6.03627px 3.62176px -1.25px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 9.74808px 5.84885px -1.5625px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 15.9566px 9.57398px -1.875px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 27.4762px 16.4857px -2.1875px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 50px 30px -2.5px;
  `,
};
