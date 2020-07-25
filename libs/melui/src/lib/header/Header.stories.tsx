import React, { useRef, FormEvent } from 'react';
import { Header } from './Header';
import { Search } from '../search/Search';

export default {
  component: Header,
  title: 'Header',
};

export const Mercadolibre = () => {
  return <Header />;
};

export const OnlyLogo = () => {
  return (
    <Header>
      <Header.Brand>Logo</Header.Brand>
    </Header>
  );
};

export const Full = () => {
  const ref = useRef<HTMLInputElement>(null);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    console.log(ref.current.value);
  };

  return (
    <Header>
      <Header.Brand>Logo</Header.Brand>
      <Header.Item>
        <Search placeholder="Buscá lo que quieras" ref={ref} onSubmit={submit}>
          <Search.Button>Buscar</Search.Button>
        </Search>
      </Header.Item>
    </Header>
  );
};

export const Mercadopago = () => {
  return <Header brand="mercadopago" />;
};
