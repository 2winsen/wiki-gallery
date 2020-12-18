interface Image {
  source: string,
  width: number,
  height: number,
}

interface Page {
  thumbnail: Image,
  original: Image,
}

export interface WikipediaData {
  continuePage: string;
  pages: Page[];
}