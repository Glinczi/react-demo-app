import React, { Component } from "react";
import store from "../../redux/store";
import { actionTypes } from "../../redux/constant";

/**
 * redux 是单项的不是响应式的
 * 如何解决？
 *
 */

export default class Count extends Component {
  selectDom = React.createRef();

  handleSelect = (type, isODD = false) => {
    const { total, increment, decrement } = this.props;
    const selectValue = this.selectDom.current.value;
    if (type === actionTypes.INCREMENT) {
      if (isODD && total % 2 === 0) return;
      increment(selectValue);
    } else {
      decrement(selectValue);
    }
  };

  handleAsyncAction = async () => {
    const { incrementAsync } = this.props;
    const selectValue = this.selectDom.current.value;
    incrementAsync(selectValue);
  };

  render() {
    const { count } = this.props;
    return (
      <div>
        <div>{count}</div>
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
