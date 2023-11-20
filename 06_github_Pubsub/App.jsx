import React, { Component } from "react";
// import { nanoid } from "nanoid"; // 类似uuid的 生成随机id
import "./App.css";
import SearchInput from "./components/SearchInput/SearchInput";
import PersonList from "./components/PersonList/PersonList";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <SearchInput />
        <PersonList />
      </div>
    );
  }
}
