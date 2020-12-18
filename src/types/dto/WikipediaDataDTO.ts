import { Optional } from '../Optional';
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
  continue: {
    gimcontinue: string,
    continue: string,
  },
  query: {
    pages: QueryPageDTO
  };
}

export function toPO(dto: Optional<WikipediaDataDTO>): Optional<WikipediaData> {
  if (!dto || !dto.query || !dto.query.pages) {
    return undefined;
  }
  const toImage = (dto: ImageDTO) => ({
    source: dto.source,
    width: dto.width,
    height: dto.height,
  });
  const pages = Object.values(dto.query.pages)
    .map(pageDTO => ({
      original: toImage(pageDTO.original),
      thumbnail: toImage(pageDTO.thumbnail),
    }));
  return {
    continuePage: dto.continue.gimcontinue,
    pages,
  };
}

