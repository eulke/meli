import React from 'react';
import { List, ListProps } from './List';

export default {
  component: List,
  title: 'List',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: ListProps = {};

  const items = [
    {
      title: 'Este es un titulo',
      precio: 1822,
      ubicacion: 'Mendoza',
      foto: 'sin foto',
    },
    {
      title: 'Este es un titulo',
      precio: 1822,
      ubicacion: 'Mendoza',
      foto: 'sin foto',
    },
    {
      title: 'Este es un titulo',
      precio: 1822,
      ubicacion: 'Mendoza',
      foto: 'sin foto',
    },
    {
      title: 'Este es un titulo',
      precio: 1822,
      ubicacion: 'Mendoza',
      foto: 'sin foto',
    },
  ];

  return (
    <List>
      {items.map((item) => (
        <List.Item>
          <div>{item.foto}</div>
          <div>
            <span>{item.precio}</span>
            <span>{item.title}</span>
          </div>
          <div>{item.ubicacion}</div>
        </List.Item>
      ))}
    </List>
  );
};
