import React, { Component } from "react";

export default class News extends Component {
  state = {
    timer: null,
  };
  componentDidMount() {
    let timer = null;
    timer = setTimeout(() => {
      this.props.history.push("/home/message");
      this.setState({
        timer: null,
      });
    }, 3000);
    this.setState({
      timer,
    });
  }
  render() {
    return <div>这是News</div>;
  }
}
