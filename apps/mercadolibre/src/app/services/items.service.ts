import axios from 'axios';
import { Search, IItem } from '@meli/api-interfaces';

const baseUrl = '/api/items';

export const search = async (query: string): Promise<Search> => {
  const { data } = await axios.get<Search>(`${baseUrl}?q=:${query}&limit=4`);
  
  return data;
};

export const getById = async (id: string): Promise<IItem> => {
  const { data } = await axios.get<IItem>(`${baseUrl}/${id}`);

  return data;
};
