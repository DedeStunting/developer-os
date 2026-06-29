export const typography = {
  fontFamily: {
    sans: "var(--font-geist-sans, ui-sans-serif, system-ui, sans-serif)",
    mono: "var(--font-geist-mono, ui-monospace, monospace)",
  },
  fontSize: {
    caption: 12,
    sm: 14,
    base: 16,
    lg: 20,
    xl: 24,
    "2xl": 30,
    "3xl": 36,
    "4xl": 48,
    "5xl": 64,
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.625,
  },
  letterSpacing: {
    tight: "-0.025em",
    normal: "0em",
  },
} as const;

export type Typography = typeof typography;
