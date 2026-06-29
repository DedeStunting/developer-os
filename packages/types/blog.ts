export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  featured?: boolean;
}

export interface BlogPostMeta extends BlogPost {
  readingTimeMinutes: number;
}
