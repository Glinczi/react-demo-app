import React, { Component } from "react";
import Hello from "./components/Hello";

// 创建外壳组件
export default class App extends Component {
  render() {
    return (
      <div>
        <Hello />
      </div>
    );
  }
}
