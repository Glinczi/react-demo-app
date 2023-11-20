import { Component } from "react";
import "./PersonList.css";
import PubSub from "pubsub-js";

export default class PersonList extends Component {
  state = {
    userList: [],
    pubSubItem: void 0,
  };
  goPage = (url) => {
    window.open(url, "_blank");
  };
  componentDidMount() {
    // let { pubSubItem, userList } = this.state;
    // this.setState({
    //   pubSubItem: PubSub.subscribe("userList", (msg, data) => {
    //     this.setState({
    //       userList: data,
    //     });
    //   }),
    // });
    this.pubSubItem = PubSub.subscribe("userList", (msg, data) => {
      this.setState({
        userList: data,
      });
    });
    console.log(this);
  }
  render() {
    const { userList } = this.state;
    return (
      <div className="person-list">
        {userList.map((item) => {
          return (
            <div
              onClick={() => {
                this.goPage(item.html_url);
              }}
              key={item.id}
              className="person-item"
            >
              <img src={item.avatar_url} alt="" />
              <span className="userName">{item.login}</span>
            </div>
          );
        })}
      </div>
    );
  }
  componentWillUnmount() {
    PubSub.unsubscribe(this.pubSubItem);
  }
}
