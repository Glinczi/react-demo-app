import React, { Component } from "react";
import PropTypes from "prop-types";
import "./SearchInput.css";

export default class SearchInput extends Component {
  static propTypes = {
    searchByName: PropTypes.func,
  };
  setInput = React.createRef();
  search = () => {
    let node = this.setInput.current;
    let inputValue = node.value;
    if (inputValue.trim() === "") return;
    this.props.searchByName(inputValue);
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
