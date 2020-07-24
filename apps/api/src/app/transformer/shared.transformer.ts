import {
  CurrencyID,
  Price,
  Attribute,
  AttributeId,
} from '@meli/api-interfaces';

export const transformPrice = (currency: CurrencyID, price: number): Price => {
  const amount = Math.floor(price);
  const decimals = price % 1;

  return {
    currency,
    amount,
    decimals,
  };
};

export const author = {
  name: 'Esteban',
  lastname: 'Ulke',
};

export const transformCondition = (attributes: Attribute[]): string =>
  attributes.find((attribute) => attribute.id === AttributeId.ITEMCONDITION)
    .value_name;
