export const analytics = {
  enabled: false,
  provider: "plausible" as const,
  domain: "",
} as const;

export type AnalyticsConfig = typeof analytics;
