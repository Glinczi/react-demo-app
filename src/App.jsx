import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";
import "./common.css";
import SelfNavLink from "./components/SelfNavLink";
import Header from "./components/Header";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="body-area flex">
          <div className="left-nav flex flex-col" style={{ flex: 1 }}>
            <SelfNavLink to="/home" children="Home" />
            <SelfNavLink to="/about" children="About" />
          </div>
          <div className="right-content" style={{ flex: 2 }}>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
