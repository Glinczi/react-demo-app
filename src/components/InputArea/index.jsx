import React, { Component } from "react";
import PropTypes from "prop-types";

export default class InputArea extends Component {
  // 对接收的props类型和必要性进行限制
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };

  /**
   *  实现敲击回车获取输入框的值
   */
  getInputValue = (event) => {
    const { keyCode, target } = event;
    // 空格不能添加、空字符串不能添加
    if (keyCode === 13 && target.value.trim() !== "") {
      const { addTodo } = this.props;
      addTodo(target.value);
      // 清空输入框
      target.value = "";
    }
  };

  render() {
    return (
      <div>
        <input
          placeholder="请输入待办，按回车确定"
          ref="taskInput"
          onKeyUp={this.getInputValue}
          type="texts"
        />
      </div>
    );
  }
}
