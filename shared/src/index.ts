export interface Article {
    id: string;
    title: string;
    url: string;
    source: string;
    publishedAt: string;
    summary?: string;
  }
  
  export interface ScrapeResult {
    articles: Article[];
    scrapedAt: string;
  }