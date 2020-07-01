import React, { Component } from "react";
import "./Landing.css";

export default class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <h1>Watch me roam</h1>
        <a href="/signup">
          <button type="button" class="btn btn-outline-dark">
            Sign up
          </button>
        </a>
        <a href="/signin">
          <button type="button" class="btn btn-dark">
            Sign in
          </button>
        </a>
      </div>
    );
  }
}
