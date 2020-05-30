import React from "react";
import logo from "./logo.svg";
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
          <Route exact path={route.path}>{route.component}</Route>
        ))}
      </Switch>
    </Router>
  );
}

export default App;
