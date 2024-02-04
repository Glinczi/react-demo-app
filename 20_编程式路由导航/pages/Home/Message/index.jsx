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

  useRouterWays = (methods, data) => {
    /**
     * 主要是借助props里面histroy的方法实现路由的跳转
     * push
     * replace
     * go
     * goBack
     */
    if (methods === "push") {
      // this.props.history.push(`/home/message/detail/${id}/${title}`); params和search跳转方式
      this.props.history.push(`/home/message/detail`, data); // state传参
    } else {
      // this.props.history.replace(`/home/message/detail/${id}/${title}`);
      this.props.history.replace(`/home/message/detail`, data);
    }
  };

  render() {
    const { messageList } = this.state;
    console.log(this.props);
    return (
      <div>
        {/* params参数 编写路由 */}
        <div className="flex flex-col">
          {messageList.map((item) => {
            return (
              <div key={item.id}>
                <Link to={`/home/message/detail/${item.id}/${item.title}`}>
                  {item.title}
                </Link>
                <button
                  onClick={() => {
                    this.useRouterWays("push", {
                      id: item.id,
                      title: item.title,
                    });
                  }}
                >
                  push跳转
                </button>
                <button
                  onClick={() => {
                    this.useRouterWays("replace", {
                      id: item.id,
                      title: item.title,
                    });
                  }}
                >
                  replace跳转
                </button>
              </div>
            );
          })}
        </div>
        {/* search参数 编写路由 */}
        {/* <div>
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
        </div> */}
        {/* state参数编写路由 */}
        {/* <div>
          {messageList.map((item) => {
            return (
              <Link
                key={item.id}
                to={{
                  pathname: "/home/message/detail",
                  state: {
                    id: item.id,
                    title: item.title,
                  },
                }}
              >
                {item.title}
              </Link>
            );
          })}
        </div> */}

        {/* 传递params参数 : 路径上要提前定义好params的key */}
        {/* <Route
          path="/home/message/detail/:id/:title"
          component={Detail}
        ></Route> */}
        {/* 传递search参数无需定义key */}
        {/* <Route path="/home/message/detail" component={Detail}></Route> */}
        {/* 传递state参数无需定义key */}
        <Route replace path="/home/message/detail" component={Detail}></Route>
      </div>
    );
  }
}
