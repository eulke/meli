import axios from 'axios';
import { ICategory } from '@meli/api-interfaces';

const baseUrl = 'https://api.mercadolibre.com';

export const get = async (id: string): Promise<ICategory> => {
  const path = `${baseUrl}/categories/${id}`;

  const { data } = await axios.get<ICategory>(path);

  return data;
};
