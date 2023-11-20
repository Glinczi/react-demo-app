import React, { Component } from "react";
import "./SearchInput.css";
import axios from "axios";
import PubSub from "pubsub-js";

export default class SearchInput extends Component {
  setInput = React.createRef();
  search = () => {
    let node = this.setInput.current;
    let inputValue = node.value;
    if (inputValue.trim() === "") return;
    let baseUrl = `https://api.github.com/search/users?q=${inputValue}`;
    // let baseUrl = `http://localhost:3000/api1/search/users?q=${value}`;
    axios.get(baseUrl).then(
      (response) => {
        console.log(response.data);
        // 更新list组件的内部的值
        // this.setState({
        //   userList: response.data.items,
        // });
        PubSub.publish("userList", response.data.items);
      },
      (error) => {
        console.log(error);
      }
    );
  };
  render() {
    return (
      <div className="search-input">
        <input
          ref={this.setInput}
          type="text"
          placeholder="请输入需要搜索的人名"
        />
        <button onClick={this.search}>搜索</button>
      </div>
    );
  }
}
