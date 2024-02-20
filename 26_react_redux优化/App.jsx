import React, { Component } from "react";
import "./common.css";
import CountContainer from "./containers/CountContainer";

export default class App extends Component {
  render() {
    return (
      <div>
        <CountContainer />
      </div>
    );
  }
}
