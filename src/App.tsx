import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import SearchResult from './pages/SearchResult/SearchResult';
import Search from './pages/Search/Search';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/result/:criteria?">
          <SearchResult />
        </Route>
        <Route path="/" exact>
          <Search />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
