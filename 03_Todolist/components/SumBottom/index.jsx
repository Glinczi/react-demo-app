import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";

export default class SumBottom extends Component {
  static propTypes = {
    clearItemWithDone: PropTypes.func,
    list: PropTypes.array,
    updateAllListState: PropTypes.func,
  };
  /**
   * 初始化已完成和总数
   * @returns 已完成和总数
   */
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
    // render触发的条件
    const { allNum, isDone } = this.setNum();
    return (
      <div className="sum_bottom justify-between">
        <input
          type="checkbox"
          onChange={(event) => {
            this.props.updateAllListState(event.target.checked);
          }}
          checked={isDone === allNum && allNum !== 0 ? true : false}
        />
        {/* 如何实现类似Vue的computed */}
        <div>
          已完成{isDone}/全部{allNum}
        </div>
        <button
          className="clear_btn"
          onClick={() => {
            this.props.clearItemWithDone();
          }}
        >
          清除所有已完成的任务
        </button>
      </div>
    );
  }
}
