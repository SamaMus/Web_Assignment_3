// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home.jsx';
import FlashCardsPage from './pages/FlashCardsPage.jsx';
import FlashCard from './pages/FlashCard.jsx';
import Messages from './pages/Messages.jsx';
import ContactPage from './pages/ContactPage.jsx';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/flashcards" component={FlashCardsPage} />
        <Route path="/flashcard/:id" component={FlashCard} />
        <Route path="/messages" component={Messages} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </Router>
  );
};

export default App;
