import { Price } from '@meli/api-interfaces';

export const formatCurrency = (price: Price) =>
  new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: price.currency,
    minimumFractionDigits: 0,
  }).format(price.amount);
