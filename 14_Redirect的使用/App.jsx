import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";
import SelfNavLink from "./components/SelfNavLink";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="head-area">React Router Demo</div>
        <div className="body-area flex">
          <div className="left-nav flex flex-col" style={{ flex: 1 }}>
            <SelfNavLink to="/home" children="Home" />
            <SelfNavLink to="/about" children="About" />
          </div>
          <div className="right-content" style={{ flex: 2 }}>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
              {/* 重定向 （兜底） */}
              {/* 放在路由注册的最下方 当所有的路由都无法匹配的时候 跳转到Redirect指定的路径 */}
              <Redirect to="/home" />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
