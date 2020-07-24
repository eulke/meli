import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import * as api from '../services/items.service';
import { Search } from '@meli/api-interfaces';
import { List, Breadcrumbs } from '@meli/melui';
import shipping from '../../assets/ic_shipping.png';
import '../app.scss';
import './Results.scss';
import { formatCurrency } from '../utils/utils';

export const Results = () => {
  const [results, setResults] = useState<Search>();
  let query = useQuery();
  const queryValue = query.get('search');

  useEffect(() => {
    const getResults = async () => {
      const result = await api.search(queryValue);
      setResults(result);
    };
    getResults();
  }, [queryValue]);

  return (
    <div className="container">
      <Breadcrumbs items={results?.categories} />
      <List>
        {results?.items?.map((item) => (
          <Link to={`items/${item.id}`} key={item.id}>
            <List.Item>
              <img className="product-image" src={item.picture} alt="item" />
              <div className="item-info">
                <div className="price">
                  {formatCurrency(item.price)}
                  {item.free_shipping && (
                    <img src={shipping} alt="free_shipping" />
                  )}
                </div>
                <h3 className="title">{item.title}</h3>
              </div>
              <span className="state">{item.state}</span>
            </List.Item>
          </Link>
        ))}
      </List>
    </div>
  );
};

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};
