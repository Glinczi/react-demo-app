import { Component } from "react";
import PropTypes from "prop-types";
import "./PersonList.css";

export default class PersonList extends Component {
  static propTypes = {
    userList: PropTypes.array,
  };
  goPage = (url) => {
    window.open(url, "_blank");
  };
  render() {
    const { userList } = this.props;
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
}
