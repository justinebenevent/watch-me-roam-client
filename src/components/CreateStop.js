import React from "react";
import { withRouter } from "react-router";

function CreateStop(props) {
  let tripId = window.location.pathname.split("/createStop/")[1];
  if (!props.loggedInUser) {
    return (
      <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <>
      <form
        onSubmit={(e) => {
          props.onAdd(e, tripId);
        }}
      >
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

export default withRouter(CreateStop);
