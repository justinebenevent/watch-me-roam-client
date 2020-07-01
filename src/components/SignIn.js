import React from "react";

export default function Signin(props) {
  return (
    <>
      <form onSubmit={props.onSignIn}>
        <h2>Sign In</h2>
        <div class="form-group">
          <label for="email">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      <a href="/">
        <button>Back to landing</button>
      </a>
      <a href="/home">
        <button>Home</button>
      </a>
    </>
  );
}
