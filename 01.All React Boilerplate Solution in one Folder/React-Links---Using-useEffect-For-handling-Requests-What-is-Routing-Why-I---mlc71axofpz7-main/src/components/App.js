import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../styles/App.css";
import ComponentsTopic from "./ComponentsTopic";
import Home from "./Home";
import RenderingTopic from "./RenderingTopic";
import Topics from "./Topics";

const App = () => {
  return (
    <Router>
      <div id="main">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/topics">
            <Topics />
          </Route>
          <Route exact path="/topics/components">
            <ComponentsTopic />
          </Route>
          <Route exact path="/topics/rendering">
            <RenderingTopic />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
