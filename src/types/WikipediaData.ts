interface Image {
  source: string,
  width: number,
  height: number,
}

export interface Page {
  thumbnail: Image,
  original: Image,
}

export interface WikipediaData {
  continuePage: string;
  pages: Page[];
}