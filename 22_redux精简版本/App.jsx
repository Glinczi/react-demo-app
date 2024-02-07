import React, { Component } from "react";
import "./common.css";
import Count from "./components/Count";
import store from "./redux/store";

export default class App extends Component {
  selectDom = React.createRef();

  handleSelect = (type, isODD = false) => {
    const total = store.getState();
    const selectValue = this.selectDom.current.value;
    if (type === "increment") {
      if (isODD && total % 2 === 0) return;

      store.dispatch({
        type: "increment",
        data: selectValue * 1,
      });
    } else {
      store.dispatch({
        type: "decrement",
        data: selectValue * 1,
      });
    }
  };

  render() {
    return (
      <div>
        <Count />
        <select ref={this.selectDom} name="number" id="number-select">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button
          onClick={() => {
            this.handleSelect("increment");
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.handleSelect("decrement");
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            this.handleSelect("increment2", true);
          }}
        >
          increment if odd
        </button>
        <button>increment async</button>
      </div>
    );
  }
}
