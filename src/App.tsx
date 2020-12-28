import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import SearchResult from './pages/SearchResult/SearchResult';
import Search from './pages/Search/Search';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/result/:criteria?">
            <SearchResult />
          </Route>
          <Route path="/" exact>
            <Search />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
