import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IItem } from '@meli/api-interfaces';
import * as api from '../services/items.service';
import { Breadcrumbs, Button } from '@meli/melui';
import './Detail.scss';
import { formatCurrency } from '../utils/utils';

export const Detail = () => {
  const { id } = useParams();
  const [{ categories, item }, setItem] = useState<
    Pick<IItem, 'categories' | 'item'>
  >({
    categories: null,
    item: null,
  });

  useEffect(() => {
    const getItem = async () => {
      const result = await api.getById(id);
      setItem(result);
    };
    getItem();
  }, []);

  return (
    <div className="container">
      {categories && <Breadcrumbs items={categories} />}
      {item && (
        <div className="detail-box">
          <div className="info">
            <img src={item.picture} alt="product" />
            <div className="shop-container">
              <span className="condition">
                {item.condition} - {item.sold_quantity} vendidos
              </span>
              <h3 className="title">{item.title}</h3>
              <p className="price">{formatCurrency(item.price)}</p>
              <Button>Comprar</Button>
            </div>
          </div>
          <div className="description">
            <p className="title">Descripción del producto</p>
            <p className="detail">{item.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};
