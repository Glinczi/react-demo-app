import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class SelfNavLink extends Component {
  render() {
    console.log(this.props);
    return (
      <NavLink
        activeClassName="self-active"
        className="nav-item"
        {...this.props}
      />
    );
  }
}
