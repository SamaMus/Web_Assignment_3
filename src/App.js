import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projects/:projectId" component={ProjectPage} />
      </Switch>
    </Router>
  );
};

export default App;
