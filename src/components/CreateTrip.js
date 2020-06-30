import React from "react";
import { Redirect } from "react-router-dom";

export default function CreateTrip(props) {
  if (!props.loggedInUser) {
    return <Redirect to="/sign-in" />;
  }
  return (
    <>
      <form onSubmit={props.onAdd}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" name="name" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            name="description"
            id="description"
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input type="file" className="form-control" name="image" id="image" />
        </div>
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </>
  );
}
