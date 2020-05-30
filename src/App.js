import React from "react";
import NavBar from "./components/navBar";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        {routes.map((route) => (
          <Route exact path={route.path} key={route.name}>{route.component}</Route>
        ))}
      </Switch>
    </Router>
  );
}

export default App;
