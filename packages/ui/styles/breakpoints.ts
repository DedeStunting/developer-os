export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export const container = {
  max: 1280,
  padding: {
    mobile: 16,
    tablet: 24,
    desktop: 32,
  },
} as const;

export type Breakpoints = typeof breakpoints;
export type Container = typeof container;
