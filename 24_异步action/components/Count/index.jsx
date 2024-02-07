import React, { Component } from "react";
import store from "../../redux/store";

/**
 * redux 是单项的不是响应式的
 * 如何解决？
 *
 */

export default class Count extends Component {
  // componentDidMount() {
  //   // 这里只能触发当前组件的render更新 也可以放在入口文件，全局更新
  //   store.subscribe(() => {
  //     // this.render(); // 直接调没有作用
  //     this.setState({}); // 通过这个方式去触发render函数 bug????????
  //   });
  // }
  /**
   * getState 主动调用了 reducer 的方法
   */
  render() {
    return <div>{store.getState()}</div>;
  }
}
