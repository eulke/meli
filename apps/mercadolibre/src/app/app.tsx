import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './app.scss';
import { Detail } from './containers/Detail';
import { Results } from './containers/Results';
import { SearchBar } from './components/SearchBar';

export const App = () => {
  return (
    <Router>
      <SearchBar />
      <Switch>
        <Route exact path="/items">
          <Results />
        </Route>
        <Route exact path="/items/:id">
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
};
