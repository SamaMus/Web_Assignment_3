import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import FlashCardsPage from './pages/FlashCardsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';


const App = () => {
  return (
    <Router basename="/Web_Assignment_3">
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cards" component={FlashCardsPage} />
        <Route path="/contactpage" component={ContactPage} />
      </Switch>
    </Router>
  );
};

export default App;
