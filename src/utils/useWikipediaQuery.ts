import { useSWRInfinite } from 'swr';
import { toPO, WikipediaDataDTO } from '../types/dto/WikipediaDataDTO';
import { Optional } from '../types/Optional';
import { WikipediaData } from '../types/WikipediaData';

/**
 * Query builder
 * https://en.wikipedia.org/wiki/Special:ApiSandbox#action=query&format=json&prop=pageimages&titles=bmw&generator=images&redirects=1&piprop=thumbnail%7Cname%7Coriginal&gimlimit=50
 * If there are more images gimcontinue value needs to be added to query param example gimcontinue=3772%7C2020_BMW_X1_sDrive18i_1.5_Front.jpg
 */
function createWikipediaQueryUrl(searchCriteria: string, continuePage?: string) {
  const params = new URLSearchParams();
  params.append('action', 'query');
  params.append('format', 'json');
  params.append('prop', 'pageimages');
  params.append('titles', searchCriteria);
  params.append('generator', 'images');
  // To automatically redirect example Bmw -> BMW
  params.append('redirects', '1');
  params.append('piprop', 'name|original|thumbnail');
  params.append('pithumbsize', '300');
  params.append('gimlimit', '20');
  if (continuePage) {
    params.append('gimcontinue', continuePage);
  }
  return `${process.env.REACT_APP_API_HOST}/w/api.php?${params.toString()}&origin=*`;
}

const getKey = (criteria: string) => (pageIndex: number, previousPageData: WikipediaDataDTO | null) => {
  if (pageIndex === 0) {
    return createWikipediaQueryUrl(criteria);
  }
  if (previousPageData) {
    const previous = toPO(previousPageData, 0);
    if (!previous.continuePage) {
      return null;
    }
    return createWikipediaQueryUrl(criteria, previous.continuePage);
  }
  return null;
}

export function useWikipediaQuery(criteria: string) {
  const fetcher = (url: string) => {
    return fetch(url, {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    }).then(res => res.json())
  };
  const { data, error, size, setSize } = useSWRInfinite<WikipediaDataDTO>(getKey(criteria), fetcher);
  let wikipediaDataItems: Optional<WikipediaData[]> = undefined;
  if (data) {
    wikipediaDataItems = data.map(toPO);
  }
  return {
    data: wikipediaDataItems,
    isLoading: !error && !data,
    isError: error,
    size,
    setSize,
  }
}