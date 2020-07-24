import React from 'react';
import { Header, Search } from '@meli/melui';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from '../assets/Logo_ML.png';
import find from '../assets/ic_Search.png';
import './app.scss'

export const App = () => {
  // useEffect(() => {
  //   fetch('/api/items?q=:pelota&limit=4')
  //     .then((r) => r.json())
  //     .then(setMessage);
  // }, []);

  return (
    <Router>
      <Header>
        <Header.Brand>
          <img src={logo} alt="logo" />
        </Header.Brand>
        <Header.Item>
          <Search placeholder="Nunca dejes de buscar">
            <Search.Button>
              <img src={find} alt="search" />
            </Search.Button>
          </Search>
        </Header.Item>
      </Header>
    </Router>
  );
};

export default App;
