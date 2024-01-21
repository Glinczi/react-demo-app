import React, { Component } from "react";
import { Route } from "react-router-dom";
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
            {/*
             * 如何传递标签体给组件？
             * 标签体其实也是一个特殊的props属性 -- children
             */}
            <SelfNavLink to="/home" children="Home" />
            <SelfNavLink to="/about" children="About" />
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
