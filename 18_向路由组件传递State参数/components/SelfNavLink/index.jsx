import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class SelfNavLink extends Component {
  render() {
    return (
      <NavLink
        activeClassName="self-active"
        className="nav-item"
        {...this.props}
      />
    );
  }
}
