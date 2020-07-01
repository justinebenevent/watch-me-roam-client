import React from "react";
import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <ul className="nav ">
      <li className="nav-item">
        <Link className="nav-link active myContainer" to="/home">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/createTrip">
          Create trip
        </Link>
      </li>
      {props.loggedInUser ? (
        <li className="nav-item">
          <button className="nav-link" onClick={props.onLogout}>
            Logout
          </button>
        </li>
      ) : (
        <>
          <li className="nav-item">
            <Link className="nav-link" to="/signin">
              Sign in
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signup">
              Sign up
            </Link>
          </li>
        </>
      )}
    </ul>
  );
}
