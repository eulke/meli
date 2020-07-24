interface Base {
  author: Author;
  categories: string[];
}
export interface Search extends Base {
  items: Item[];
}

export interface Author {
  name: string;
  lastname: string;
}

export interface Item {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  state?: string;
}

export interface Price {
  currency: string;
  amount: number;
  decimals: number;
}

export interface IItem extends Base {
  item: ItemDetail;
}

export interface ItemDetail extends Item {
  sold_quantity: number;
  description: string;
}
