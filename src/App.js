import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home.jsx'
import FlashCardsPage from './pages/FlashCardsPage.jsx';
import FlashCard from './pages/FlashCard.jsx';
import Messages from './pages/Messages.jsx';
import ContactPage from './pages/ContactPage.jsx';

const App = () => {
  return (
    <Router>
      <Switch>
      <Route path="/home" render={() => <Home />} />
      <Route path="/flashcard" render={() => <FlashCard />} />
      <Route path="/flashcardspage" render={() => <FlashCardsPage />} />
      <Route path="/messages" render={() => <Messages />} />
      <Route path="/contactpage" render={() => <ContactPage />} />
      </Switch>
    </Router>
  );
};

export default App;
