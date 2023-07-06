import React, { Component } from "react";
// import { nanoid } from "nanoid"; // 类似uuid的 生成随机id
import axios from "axios";
import "./App.css";
import SearchInput from "./components/SearchInput/SearchInput";
import PersonList from "./components/PersonList/PersonList";

export default class App extends Component {
  state = {
    userList: [],
  };
  searchByName = (value) => {
    let baseUrl = `https://api.github.com/search/users?q=${value}`;
    axios.get(baseUrl).then(
      (response) => {
        console.log(response.data);
        this.setState({
          userList: response.data.items,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  };
  render() {
    let { userList } = this.state;
    return (
      <div className="app">
        <SearchInput searchByName={this.searchByName} />
        <PersonList userList={userList} />
      </div>
    );
  }
}
