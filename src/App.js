import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home.jsx'
import FlashCardsPage from './pages/FlashCardsPage.jsx';
import FlashCard from './pages/FlashCard.jsx';

const App = () => {
  return (
    <Router>
      <Switch>
      <Route path="/home" render={() => <Home />} />
      <Route path="/flashcard" render={() => <FlashCard />} />
      <Route path="/flashcardspage" render={() => <FlashCardsPage />} />

      </Switch>
    </Router>
  );
};

export default App;
