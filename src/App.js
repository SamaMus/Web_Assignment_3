import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import FlashCardsPage from './pages/FlashCardsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import Messages from './pages/Messages.jsx';


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cards" component={FlashCardsPage} />
        <Route path="/contactpage" component={ContactPage} />
        <Route path="/messages" component={Messages} />
      </Switch>
    </Router>
  );
};

export default App;
