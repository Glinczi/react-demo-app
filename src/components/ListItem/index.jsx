import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../common.css";
import "./index.css";

export default class ListItem extends Component {
  // props限制

  static propTypes = {
    isDone: PropTypes.func.isRequired,
    list: PropTypes.array.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  };
  /**
   * 处理删除操作
   */
  handleDelete = (id) => {
    this.props.deleteTodo(id);
  };
  /**
   * 处理check改变
   * @returns
   */
  handleChange = (id) => {
    this.props.isDone(id);
  };
  render() {
    return (
      <div className="all_list">
        <ul className="list">
          {this.props.list.map((item) => {
            return (
              <li key={item.id} className="list_item">
                {/* defaultChecked 表示第一次是否勾选 后续修改没有反应
                需要使用checked（这个需要搭配onChange事件或者readonly）*/}
                <div>
                  <input
                    type="checkbox"
                    checked={item.isDone}
                    onChange={() => {
                      this.handleChange(item.id);
                    }}
                  />
                  <span className="margin-l-50">{item.text}</span>
                </div>
                <div
                  className="delBtn"
                  onClick={() => {
                    this.handleDelete(item.id);
                  }}
                >
                  删除
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
