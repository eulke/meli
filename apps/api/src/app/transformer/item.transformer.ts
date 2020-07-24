import {
  IItemDetail,
  IDescription,
  IItem,
  ICategory,
} from '@meli/api-interfaces';
import { author, transformPrice } from './shared.transformer';

const transformDescription = (description: IDescription): string =>
  description.plain_text;

const transformCategory = (category: ICategory): string[] =>
  category.path_from_root.map((cat) => cat.name);

export const transformItem = (
  {
    id,
    title,
    price,
    currency_id,
    pictures,
    condition,
    sold_quantity,
    shipping: { free_shipping },
  }: IItemDetail,
  description: IDescription,
  category: ICategory
): IItem => ({
  author,
  item: {
    id,
    title,
    price: transformPrice(currency_id, price),
    picture: pictures[0]?.url,
    condition,
    free_shipping,
    sold_quantity,
    description: transformDescription(description),
  },
  categories: transformCategory(category),
});
