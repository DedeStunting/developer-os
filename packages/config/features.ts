export const features = {
  blog: false,
  speaking: false,
  notes: false,
  openSource: false,
  darkMode: false,
  search: false,
  rss: false,
  analytics: false,
  resumeGenerator: true,
  admin: false,
  publicApi: false,
} as const;

export type Features = typeof features;
export type FeatureFlag = keyof Features;

export function isFeatureEnabled(flag: FeatureFlag): boolean {
  return features[flag];
}
