import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Detail from "./Detail";

export default class Message extends Component {
  state = {
    messageList: [
      { id: "1", title: "消息1" },
      { id: "2", title: "消息2" },
      { id: "3", title: "消息3" },
    ],
  };
  render() {
    const { messageList } = this.state;
    return (
      <div>
        {/* params参数 编写路由 */}
        {/* <div>
          {messageList.map((item) => {
            return (
              <Link key={item.id} to={`/home/message/detail/${item.id}/${item.title}`}>
                {item.title}
              </Link>
            );
          })}
        </div> */}
        {/* search参数 编写路由 */}
        <div>
          {messageList.map((item) => {
            return (
              <Link
                key={item.id}
                to={`/home/message/detail?id=${item.id}&title=${item.title}`}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
        {/* search参数 编写路由 */}
        <div>
          {/* 传递params参数 : 路径上要提前定义好params的key */}
          {/* <Route path="/home/message/detail/:id/:title" component={Detail}></Route> */}
          {/* 传递search参数无需定义key */}
          <Route path="/home/message/detail" component={Detail}></Route>
        </div>
      </div>
    );
  }
}
