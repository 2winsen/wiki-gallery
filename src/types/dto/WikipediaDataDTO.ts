import { WikipediaData } from '../WikipediaData';

interface ImageDTO {
  source: string,
  width: number,
  height: number,
}

interface QueryPageDTO {
  [key: string]: {
    thumbnail: ImageDTO,
    original: ImageDTO,
  }
}

export interface WikipediaDataDTO {
  batchcomplete: string,
  continue?: {
    gimcontinue: string,
    continue: string,
  },
  query?: {
    pages: QueryPageDTO
  };
}

export function toPO(dto: WikipediaDataDTO): WikipediaData {
  const toImage = (dto: ImageDTO) => ({
    source: dto.source,
    width: dto.width,
    height: dto.height,
  });
  let pages: WikipediaData['pages'] = [];
  if (dto.query) {
    pages = Object.values(dto.query.pages)
      .map(pageDTO => ({
        original: toImage(pageDTO.original),
        thumbnail: toImage(pageDTO.thumbnail),
      }));
  }
  return {
    continuePage: dto.continue ? dto.continue.gimcontinue : '',
    pages,
  };
}

