import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import * as api from '../services/items.service';
import { Search } from '@meli/api-interfaces';
import { List, Breadcrumbs } from '@meli/melui';
import { ItemCard } from '../components/ItemCard/ItemCard';
import '../app.scss';
import './Results.scss';

export const Results = () => {
  const [results, setResults] = useState<Search>();
  const query = useQuery();
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
      <List className="results">
        {results?.items?.map((item) => (
          <List.Item key={item.id}>
            <Link to={`items/${item.id}`}>
              <ItemCard item={item} />
            </Link>
          </List.Item>
        ))}
      </List>
    </div>
  );
};

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};
