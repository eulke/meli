import React, { useRef, FormEvent } from 'react';
import { Header, Search } from '@meli/melui';
import logo from '../../assets/Logo_ML.png';
import find from '../../assets/ic_Search.png';
import { useHistory } from 'react-router-dom';

export const SearchBar = () => {
  const ref = useRef<HTMLInputElement>();
  const history = useHistory();
  const submit = (e: FormEvent) => {
    e.preventDefault()
    history.push(`/items?search=${ref.current.value}`);
  };

  return (
    <Header>
      <Header.Brand>
        <img src={logo} alt="logo" />
      </Header.Brand>
      <Header.Item>
        <Search placeholder="Nunca dejes de buscar" ref={ref} onSubmit={submit}>
          <Search.Button>
            <img src={find} alt="search" />
          </Search.Button>
        </Search>
      </Header.Item>
    </Header>
  );
};
