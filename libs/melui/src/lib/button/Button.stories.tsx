import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  component: Button,
  title: 'Button',
};

export const principal = () => (
  <Button variant="principal" onClick={action('button clicked')}>
    {text('Label', 'Comprar')}
  </Button>
);

export const outline = () => (
  <Button variant="outline">{text('Label', 'Agregar al carrito')}</Button>
);

export const withLoader = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [loading]);

  return (
    <Button variant="principal" isLoading={loading} onClick={() => setLoading(true)}>
      {text('Label', 'Click me!')}
    </Button>
  );
};
