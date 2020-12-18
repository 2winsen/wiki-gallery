import useSWR from 'swr';
import { toPO, WikipediaDataDTO } from '../types/dto/WikipediaDataDTO';

/**
 * Query builder
 * https://en.wikipedia.org/wiki/Special:ApiSandbox#action=query&format=json&prop=pageimages&titles=bmw&generator=images&redirects=1&piprop=thumbnail%7Cname%7Coriginal&gimlimit=50
 * If there are more images gimcontinue value needs to be added to query param example gimcontinue=3772%7C2020_BMW_X1_sDrive18i_1.5_Front.jpg
 */
function createWikipediaQueryUrl(searchCriteria: string) {
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
  return `${process.env.REACT_APP_API_HOST}/w/api.php?${params.toString()}`;
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function useWikipediaQuery(criteria: string) {
  const url = createWikipediaQueryUrl(criteria);
  const { data, error } = useSWR<WikipediaDataDTO>(url, fetcher);
  let wikipediaData = toPO(data);
  return {
    data: wikipediaData,
    isLoading: !error && !data,
    isError: error
  }
}