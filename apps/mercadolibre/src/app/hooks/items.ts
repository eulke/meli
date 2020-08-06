import useSWR from 'swr'
import { Search, IItem } from '@meli/api-interfaces';

const baseUrl = '/api/items';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export const useItems = (query: string) => {
  const { data, error } = useSWR<Search>(`${baseUrl}?q=:${query}&limit=4`, fetcher)
  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}

export const useItem = (id: string) => {
  const { data, error } = useSWR<IItem>(`${baseUrl}/${id}`, fetcher)
  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}