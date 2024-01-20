import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="head-area">React Router Demo</div>
        <div className="body-area flex">
          <div className="left-nav flex flex-col" style={{ flex: 1 }}>
            {/* 编写路由 */}
            <Link className="nav-item" to="/home">
              Home
            </Link>
            <Link className="nav-item" to="/about">
              about
            </Link>
          </div>
          <div className="right-content" style={{ flex: 2 }}>
            {/* 注册路由 */}
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </div>
    );
  }
}
