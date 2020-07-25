import React, { FunctionComponent } from 'react';
import { Item } from '@meli/api-interfaces';
import shipping from '../../../assets/ic_shipping.png';
import { formatCurrency } from '../../utils/utils';
import './ItemCard.scss';

interface ItemCardProps {
  item: Item;
}

export const ItemCard: FunctionComponent<ItemCardProps> = ({
  item,
  ...props
}) => (
  <span className="item-container">
    <img className="product-image" src={item.picture} alt="item" />
    <div className="item-info">
      <div className="price">
        {formatCurrency(item.price)}
        {item.free_shipping && <img src={shipping} alt="free_shipping" />}
      </div>
      <h3 className="title">{item.title}</h3>
    </div>
    <span className="state">{item.state}</span>
  </span>
);
