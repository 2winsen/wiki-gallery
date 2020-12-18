import useSWR from 'swr';
import { createWikipediaApiUrl } from './utils';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function useCriteria(condition: boolean, criteria: string) {
  const { data, error } = useSWR(condition ? createWikipediaApiUrl(criteria) : null, fetcher)
  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}