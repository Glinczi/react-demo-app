import React, { Component } from "react";
import { nanoid } from "nanoid"; // 类似uuid的 生成随机id
import "./App.css";
import InputArea from "./components/InputArea";
import ListItem from "./components/ListItem";
import SumBottom from "./components/SumBottom";

/**
 * 几个小问题
 * 1. 如何通过点击点选框关联对应的数据？
 * 2. 如何和Vue一样实现双向绑定
 */

/**
 * 将数据和处理数据的方法放在父组件里面  通过Props的方式传递给子组件 就可以避免兄弟组件之间的值传递问题
 */

// 创建外壳组件
export default class App extends Component {
  state = {
    list: [
      {
        id: 1,
        text: "起床",
        isDone: false,
      },
      {
        id: 2,
        text: "刷牙",
        isDone: false,
      },
      {
        id: 3,
        text: "喝水",
        isDone: true,
      },
    ],
  };

  /**
   * 将input输入的内容改变state
   */
  addTodo = (value) => {
    let obj = {
      id: nanoid(),
      text: value,
      isDone: false,
    };
    let { list } = this.state;
    list.unshift(obj);
    this.setState({
      list,
    });
  };
  /**
   * 已完成
   */
  isDone = (id) => {
    let { list } = this.state;
    let newList = list.map((item) => {
      if (item.id === id) {
        return { ...item, isDone: !item.isDone };
      } else {
        return item;
      }
    });
    console.log("newList", newList);
    this.setState({
      list: newList,
    });
  };
  /**
   * 删除操作
   */
  deleteTodo = (id) => {
    let { list } = this.state;
    let index = list.findIndex((item) => {
      return item.id === id;
    });
    list.splice(index, 1);
    this.setState({
      list,
    });
  };

  render() {
    return (
      <div>
        <div className="todo_list">
          {/* Props可以传递方法 */}
          <InputArea addTodo={this.addTodo} />
          <ListItem
            isDone={this.isDone}
            list={this.state.list}
            deleteTodo={this.deleteTodo}
          ></ListItem>
          <SumBottom></SumBottom>
        </div>
      </div>
    );
  }
}
