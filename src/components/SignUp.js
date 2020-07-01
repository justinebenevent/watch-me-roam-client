import React from "react";

export default function Signup(props) {
  return (
    <>
      <form onSubmit={props.onSignUp}>
        <h2>Sign Up</h2>
        <div class="form-group">
          <label for="username">Name</label>
          <input
            type="name"
            class="form-control"
            id="username"
            placeholder="Archer"
          />
        </div>
        <div class="form-group">
          <label for="email">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="blabla@blabla.com"
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
    </>
  );
}
