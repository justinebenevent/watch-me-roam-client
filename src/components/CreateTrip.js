import React from "react";

export default function CreateTrip(props) {
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
          <label for="startDate">Start date</label>
          <input
            type="date"
            className="form-control"
            name="startDate"
            id="startDate"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </>
  );
}
