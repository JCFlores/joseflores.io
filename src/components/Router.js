import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import NotFound from "./NotFound";
import projects from "../projects";

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            style={{ fontFamily: "sans-serif" }}
            exact
            path="/"
            component={About}
          />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
