import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../components/navBar';
import PaperDisplay from '../components/content/paperDisplay';
import routes from '../routes';

const App = () => (
  <Router>
    <NavBar />
    <Switch>
      {routes.map((route) => (
        <Route exact path={route.path} key={route.name}>
          <PaperDisplay>{route.component}</PaperDisplay>
        </Route>
      ))}
    </Switch>
  </Router>
);

export default App;
