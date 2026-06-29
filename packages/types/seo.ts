export interface Seo {
  title: string;
  description: string;
  url: string;
}

export interface PageSeo extends Seo {
  ogImage?: string;
  noIndex?: boolean;
}
