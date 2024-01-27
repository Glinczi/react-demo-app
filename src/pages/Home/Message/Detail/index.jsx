import React, { Component } from "react";
import qs from "qs"; // 可以将keyValue形式的字符串转换为对象

export default class Detail extends Component {
  state = {
    newsDetailList: [
      { id: "1", content: "详情1" },
      { id: "2", content: "详情2" },
      { id: "3", content: "详情3" },
    ],
  };
  render() {
    // 处理params参数
    // 路由信息存储在props的match属性里面
    // const { id, title } = this.props.match.params;

    // 处理search参数
    const { search } = this.props.location;
    const { id, title } = qs.parse(search.split("?")[1]);
    console.log(id, title);
    const { newsDetailList } = this.state;
    const content = newsDetailList.find((item) => {
      return item.id === id;
    }).content;
    console.log(id, title, content);
    return (
      <div>
        <span>id:{id}</span>
        <span>title:{title}</span>
        <span>content:{content}</span>
      </div>
    );
  }
}
