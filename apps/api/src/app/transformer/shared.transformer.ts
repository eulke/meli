import { CurrencyID, Price } from '@meli/api-interfaces';

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
