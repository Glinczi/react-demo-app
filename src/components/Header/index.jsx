import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Header extends Component {
  pageCount = React.createRef();

  render() {
    return (
      <div className="head-area">
        <h2>React Router Demo</h2>
        <div>
          <button
            onClick={() => {
              this.props.history.goBack();
            }}
          >
            返回
          </button>
          <button
            onClick={() => {
              this.props.history.goForward();
            }}
          >
            前进
          </button>
          <div className="inline">
            <button
              onClick={() => {
                const element = this.pageCount.current;
                this.props.history.go(element.value);
              }}
            >
              跳转
            </button>
            <input ref={this.pageCount} type="number"></input>
          </div>
        </div>
      </div>
    );
  }
}
// widthRouter
// 一般组件的props中是没有history之类的对象的
// 如果希望一般组件也具有路由组件类似的API时，可以通过withRouter加工一下
// widthRouter 的返回值是一个新组建
export default withRouter(Header);
