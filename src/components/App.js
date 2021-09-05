import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Info from "../pages/Info";
import PokemonStats from "../pages/PokemonStats";
import NotFound from "../pages/NotFound";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/info" component={Info} />
          <Route exact path="/pokemon-stats" component={PokemonStats} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
