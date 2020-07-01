import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";

export default function NavBar(props) {
  return (
    <nav className="navbar" style={{ backgroundColor: "#e3f2fd" }}>
      <ul className="nav">
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
        <li className="nav-item">
          <Link className="nav-link" to="/createStop">
            Create stop
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
    </nav>
  );
}
