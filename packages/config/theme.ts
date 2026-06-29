export const theme = {
  default: "light" as const,
  supported: ["light"] as const,
  future: ["dark"] as const,
} as const;

export type ThemeConfig = typeof theme;
