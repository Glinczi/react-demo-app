import { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import SelfNavLink from "../../components/SelfNavLink";
import News from "./News";
import Message from "./Message";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h3>这是home页面</h3>
        {/* 编写路由 */}
        <SelfNavLink to="/home/news" children="News" />
        <SelfNavLink to="/home/message" children="Message" />
        {/* 注册路由 */}
        <Route path="/home/news" component={News} />
        <Route path="/home/message" component={Message} />
      </div>
    );
  }
}
