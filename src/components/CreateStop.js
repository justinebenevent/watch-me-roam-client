import React from "react";
import { Redirect } from "react-router-dom";

export default function CreateStop(props) {
  if (!props.loggedInUser) {
    return <Redirect to="/signin" />;
  }
  return (
    <>
      <form onSubmit={props.onAdd}>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            className="form-control"
            name="location"
            id="location"
          />
        </div>
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
          <label for="startDate">Start date</label>
          <input
            type="date"
            className="form-control"
            name="startDate"
            id="startDate"
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
