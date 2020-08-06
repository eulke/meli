import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Breadcrumbs, Button, Loader } from '@meli/melui';
import './Detail.scss';
import { formatCurrency } from '../utils/utils';
import { useItem } from '../hooks/items';

export const Detail = () => {
  const { id } = useParams();
  const { data, isLoading } = useItem(id);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [loading]);

  return (
    <div className="container">
      {isLoading ? (
        <div className="loader-container">
          <Loader />
        </div>
      ) : (
        <>
          {data?.categories && <Breadcrumbs items={data.categories} />}
          {data?.item && (
            <div className="detail-box">
              <div className="info">
                <div className="image-container">
                  <img src={data?.item.picture} alt="product" />
                </div>
                <div className="shop-container">
                  <span className="condition">
                    {data?.item.condition} - {data?.item.sold_quantity} vendidos
                  </span>
                  <h3 className="title">{data?.item.title}</h3>
                  <p className="price">{formatCurrency(data?.item.price)}</p>
                  <Button
                    size="fullwidth"
                    isLoading={loading}
                    onClick={() => setLoading(true)}
                  >
                    Comprar
                  </Button>
                </div>
              </div>
              <div className="description">
                <p className="title">Descripción del producto</p>
                <p className="detail">{data?.item.description}</p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
