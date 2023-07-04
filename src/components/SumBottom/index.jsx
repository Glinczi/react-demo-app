import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";

export default class SumBottom extends Component {
  static propTypes = {
    setAllIsDoneToFalse: PropTypes.func,
    list: PropTypes.array,
    updateAllListState: PropTypes.func,
  };
  reset = () => {
    this.props.setAllIsDoneToFalse();
  };
  update = (state) => {
    this.props.updateAllListState(state);
  };
  setNum = () => {
    let isDone = 0;
    let { list } = this.props;
    list.forEach((item) => {
      if (item.isDone) isDone++;
    });
    return {
      allNum: list.length,
      isDone,
    };
  };

  render() {
    const { allNum, isDone } = this.setNum();
    return (
      <div className="sum_bottom justify-between">
        <input
          type="checkbox"
          onChange={(event) => {
            this.update(event.target.checked);
          }}
          checked={isDone == allNum ? true : false}
        />
        {/* 如何实现类似Vue的computed */}
        <div>
          已完成{isDone}/全部{allNum}
        </div>
        <button className="clear_btn" onClick={this.reset}>
          清除所有已完成的任务
        </button>
      </div>
    );
  }
}
