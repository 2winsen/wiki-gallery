import { WikipediaData, Page } from '../WikipediaData';

interface ImageDTO {
  source: string;
  width: number;
  height: number;
}

interface QueryPageMapDTO {
  [key: string]: {
    thumbnail: ImageDTO;
    original: ImageDTO;
  }
}

interface QueryPageDTO {
  thumbnail: ImageDTO;
  original: ImageDTO;
}

export interface WikipediaDataDTO {
  batchcomplete: string;
  continue?: {
    gimcontinue: string;
    continue: string;
  },
  query?: {
    pages: QueryPageMapDTO;
  };
}

/**
 * Some images are actually not real images like ogg audio files we need to filter them
 * @param pageDTO 
 */
function validQueryPageItemDTO(pageDTO: QueryPageDTO) {
  return pageDTO.original.height && pageDTO.original.width;
}

/**
 * For some images originals are smaller than thumbnails and we need to replace
 * @param pageDTO 
 */
function replaceOriginalWithThumbnail(pageDTO: QueryPageDTO) {
  const { thumbnail, original } = pageDTO;
  if (thumbnail.width > original.width && thumbnail.height > original.height) {
    return { ...pageDTO, original: thumbnail };
  }
  return pageDTO;
}

export function toPO(dto: WikipediaDataDTO, dataIndex: number): WikipediaData {
  const toImage = (dto: ImageDTO) => ({
    source: dto.source,
    width: dto.width,
    height: dto.height,
  });
  let pages: Page[] = [];
  if (dto.query) {
    pages = Object.values<QueryPageDTO>(dto.query.pages)
      .filter(validQueryPageItemDTO)
      .map(replaceOriginalWithThumbnail)
      .map((pageDTO, index) => ({
        index,
        dataIndex,
        original: toImage(pageDTO.original),
        thumbnail: toImage(pageDTO.thumbnail),
      }));
  }
  return {
    continuePage: dto.continue ? dto.continue.gimcontinue : '',
    pages,
  };
}
