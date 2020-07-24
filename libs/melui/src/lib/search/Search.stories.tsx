import React from 'react';
import { Search } from './Search';

export default {
  component: Search,
  title: 'Search',
};

export const primary = () => {
  return (
    <Search text="Buscar productos, marcas y más...">
      <Search.Button>Buscar</Search.Button>
    </Search>
  );
};
