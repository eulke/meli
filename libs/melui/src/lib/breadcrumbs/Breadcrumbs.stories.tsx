import React from 'react';
import { Breadcrumbs } from './Breadcrumbs';
import { array } from '@storybook/addon-knobs';

export default {
  component: Breadcrumbs,
  title: 'Breadcrumbs',
};

export const primary = () => {
  return (
    <Breadcrumbs
      items={array('Items', ['Categorias', 'futbol', 'pelota'], ',')}
    />
  );
};
