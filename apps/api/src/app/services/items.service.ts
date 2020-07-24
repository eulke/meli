import * as itemsConnector from '../connectors/items.connector';
import * as categoriesConnector from '../connectors/categories.connector';
import { Request } from 'express';
import { Search, IItem } from '@meli/api-interfaces';
import { transformItems } from '../transformer/items.transformer';
import { transformItem } from '../transformer/item.transformer';

export const search = async (request: Request): Promise<Search> => {
  try {
    const items = await itemsConnector.search(request);

    return transformItems(items);
  } catch (error) {
    console.log(error)
    return error;
  }
};

export const getById = async (id: string): Promise<IItem> => {
  try {
    const item = await itemsConnector.getById(id);
    const description = await itemsConnector.getItemDescription(id);
    const category = await categoriesConnector.get(item.category_id);

    return transformItem(item, description, category);
  } catch (error) {
    console.log(error)
    return error;
  }
};
