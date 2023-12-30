import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import FlashCardsPage from './pages/FlashCardsPage.jsx';
import FlashCard from './pages/FlashCard.jsx';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={<Home/>} />
        <Route path="/flashcard" component={<FlashCard/>} />
       <Route path="/flashcardspage" component={<FlashCardsPage/>} />

      </Switch>
    </Router>
  );
};

export default App;
