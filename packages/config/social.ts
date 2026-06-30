export const social = {
  github: "https://github.com",
  email: "mailto:hello@example.com",
} as const;

export type SocialConfig = typeof social;
