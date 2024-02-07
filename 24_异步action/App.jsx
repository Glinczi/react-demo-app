import React, { Component } from "react";
import "./common.css";
import Count from "./components/Count";
import store from "./redux/store";
import { actionTypes } from "./redux/constant";
import {
  decrementAction,
  incrementAction,
  incrementAsyncAction,
} from "./redux/count_action";

export default class App extends Component {
  selectDom = React.createRef();

  handleSelect = (type, isODD = false) => {
    const total = store.getState();
    const selectValue = this.selectDom.current.value;
    if (type === actionTypes.INCREMENT) {
      if (isODD && total % 2 === 0) return;
      store.dispatch(incrementAction(selectValue * 1)); // 通过专门的actionCreator
    } else {
      store.dispatch(decrementAction(selectValue * 1));
    }
  };

  handleAsyncAction = async () => {
    const selectValue = this.selectDom.current.value;
    store.dispatch(incrementAsyncAction(selectValue * 1));
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
            this.handleSelect(actionTypes.INCREMENT);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.handleSelect(actionTypes.DECREMENT);
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            this.handleSelect(actionTypes.INCREMENT, true);
          }}
        >
          increment if odd
        </button>
        <button onClick={this.handleAsyncAction}>increment async</button>
      </div>
    );
  }
}
