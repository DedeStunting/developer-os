export const typography = {
  fontFamily: {
    sans: "var(--font-sans, ui-sans-serif, system-ui, sans-serif)",
    mono: "var(--font-mono, ui-monospace, monospace)",
  },
  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    "2xl": 24,
    "3xl": 30,
    "4xl": 36,
    "5xl": 48,
    "6xl": 60,
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
