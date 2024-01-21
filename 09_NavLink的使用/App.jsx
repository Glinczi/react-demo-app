import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="head-area">React Router Demo</div>
        <div className="body-area flex">
          <div className="left-nav flex flex-col" style={{ flex: 1 }}>
            {/*
             * NavLink 是一个特殊的组件，它继承了 Link 组件的功能
             * 点击对应的路由标签 自带active类名
             * 也可以自定义激活的类名 通过属性 activeClassName
             */}
            <NavLink
              activeClassName="self-active"
              className="nav-item"
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              activeClassName="self-active"
              className="nav-item"
              to="/about"
            >
              about
            </NavLink>
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
