import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import FlashCardsPage from './pages/FlashCardsPage'; 

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pages" component={FlashCardsPage} />
      </Switch>
    </Router>
  );
};

export default App;
