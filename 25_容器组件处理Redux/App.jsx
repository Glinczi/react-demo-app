import React, { Component } from "react";
import "./common.css";
import store from "./redux/store";
import CountContainer from "./containers/CountContainer";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* store需要通过props传参的方式传递给容器组件 */}
        <CountContainer store={store} />
      </div>
    );
  }
}
