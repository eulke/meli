import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { List, Breadcrumbs, Loader } from '@meli/melui';
import { ItemCard } from '../components/ItemCard/ItemCard';
import '../app.scss';
import './Results.scss';
import { useItems } from '../hooks/items';

export const Results = () => {
  const query = useQuery();
  const queryValue = query.get('search');
  const { data: results, isLoading } = useItems(queryValue);

  return (
    <div className="container">
      {isLoading ? (
        <div className="loader-container">
          <Loader />
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};
