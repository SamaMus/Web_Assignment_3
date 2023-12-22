import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import FlashCardsPage from './pages/FlashCardsPage';
// import ContactMe from './ContactMe'; // Create a ContactMe component

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/flashcards" component={FlashCardsPage} />
        {/* <Route path="/contact" component={ContactMe} /> */}
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
