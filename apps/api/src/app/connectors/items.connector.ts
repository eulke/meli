import axios from 'axios';
import { Request } from 'express';
import { ISearch, IItemDetail, IDescription } from '@meli/api-interfaces';

const baseUrl = 'https://api.mercadolibre.com';

export const search = async (params: Request): Promise<ISearch> => {
  const path = `${baseUrl}/sites/MLA/search`;

  const { data } = await axios.get<ISearch>(`${path}`, {
    params: params.query,
  });

  return data;
};

export const getById = async (id: string): Promise<IItemDetail> => {
  const path = `${baseUrl}/items/${id}`;

  const { data } = await axios.get<IItemDetail>(`${path}`);

  return data;
};

export const getItemDescription = async (id: string): Promise<IDescription> => {
  const path = `${baseUrl}/items/${id}/description`;

  const { data } = await axios.get<IDescription>(`${path}`);

  return data;
};
