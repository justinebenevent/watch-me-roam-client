import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <>
      {props.trips.map((trips, i) => {
        return (
          <p key={i}>
            <Link to={`/home/${trips._id}`}>{trips.name}</Link>
          </p>
        );
      })}
    </>
  );
}
