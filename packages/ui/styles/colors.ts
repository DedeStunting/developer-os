export const colors = {
  background: "#ffffff",
  backgroundSubtle: "#fafafa",
  backgroundMuted: "#f4f4f5",

  foreground: "#09090b",
  foregroundSecondary: "#3f3f46",
  foregroundMuted: "#71717a",

  border: "#e4e4e7",
  borderSubtle: "#f4f4f5",

  accent: "#18181b",
  accentForeground: "#fafafa",

  success: "#16a34a",
  successForeground: "#ffffff",

  warning: "#ca8a04",
  warningForeground: "#ffffff",

  error: "#dc2626",
  errorForeground: "#ffffff",
} as const;

export type Colors = typeof colors;
