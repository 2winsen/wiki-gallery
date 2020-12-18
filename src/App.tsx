import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gallery from './pages/Gallery/Gallery';
import Search from './pages/Search/Search';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/gallery/:criteria">
          <Gallery />
        </Route>
        <Route path="/" exact>
          <Search />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
