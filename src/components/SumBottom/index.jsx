import React, { Component } from "react";
import "./index.css";

export default class SumBottom extends Component {
  render() {
    return (
      <div className="sum_bottom justify-between">
        <input type="checkbox" />
        {/* 如何实现类似Vue的computed */}
        <div>未完成0/全部3</div>
        <button className="clear_btn">清除所有已完成的任务</button>
      </div>
    );
  }
}
