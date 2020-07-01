import React, { Component } from "react";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <div>
          <img src="../../public/bg-picture.jpg" alt="background"></img>
        </div>
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
