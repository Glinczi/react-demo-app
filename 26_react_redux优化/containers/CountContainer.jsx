/**
 * count的容器组件 用于处理UI组件和redux的交互
 * 这里面不要直接引入store
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  incrementAction,
  decrementAction,
  incrementAsyncAction,
} from "../redux/count_action";
import { actionTypes } from "../redux/constant";

// 定义UI组件

class Count extends Component {
  selectDom = React.createRef();

  handleSelect = (type, isODD = false) => {
    const { total, increment, decrement } = this.props;
    const selectValue = this.selectDom.current.value;
    if (type === actionTypes.INCREMENT) {
      if (isODD && total % 2 === 0) return;
      increment(selectValue * 1);
    } else {
      decrement(selectValue * 1);
    }
  };

  handleAsyncAction = async () => {
    const { incrementAsync } = this.props;
    const selectValue = this.selectDom.current.value;
    incrementAsync(selectValue * 1);
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

/**
 *
 * @param {*} state store中状态值
 * @returns
 */
const mapStateToProps = (state) => ({
  count: state,
}); // 用于存放store中保存的状态
/**
 * mapDispatchToProps 一般写法
 * @param {*} dispatch
 * @returns
 */
// const mapDispatchToProps = (dispatch) => ({
//   increment: (data) => dispatch(incrementAction(data * 1)),
//   decrement: (data) => dispatch(decrementAction(data * 1)),
//   incrementAsync: (data) => dispatch(incrementAsyncAction(data * 1)),
// }); // 用于存放redux中操作状态的方法

/**
 * mapDispatchToProps 简化写法
 * react-redux 会自动实现一个diapatch分发的操作
 */
const mapDispatchToProps = {
  increment: incrementAction,
  decrement: decrementAction,
  incrementAsync: incrementAsyncAction,
}; // 用于存放redux中操作状态的方法

export default connect(mapStateToProps, mapDispatchToProps)(Count);
