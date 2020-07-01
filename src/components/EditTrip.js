import React from "react";
import axios from "axios";
import config from "../config";
import { Redirect } from "react-router-dom";

export default class EditTrip extends React.Component {
  state = {
    trip: "",
  };

  componentDidMount() {
    let id = this.props.match.params.id;
    axios
      .get(`${config.API_URL}/trips/${id}`, { withCredentials: true })
      .then((res) => {
        this.setState({
          trip: res.data,
        });
      });
  }

  handleEditTrip = (e) => {
    e.preventDefault();
    let id = this.props.match.params.id;
    axios
      .patch(
        `${config.API_URL}/trips/${id}`,
        {
          name: this.state.trip.name,
          description: this.state.trip.description,
        },
        { withCredentials: true }
      )
      .then((res) => {
        //redirect to App.js
      });
  };

  handleNameChange = (e) => {
    let newTrip = JSON.parse(JSON.stringify(this.state.trip));
    newTrip.name = e.target.value;

    this.setState({
      trip: newTrip,
    });
  };

  handleDescChange = (e) => {
    let newTrip = JSON.parse(JSON.stringify(this.state.trip));
    newTrip.description = e.target.value;

    this.setState({
      trip: newTrip,
    });
  };

  render() {
    if (!this.props.loggedInUser) {
      return <Redirect to="/sign-in" />;
    }
    if (!this.state.trip) {
      return (
        <div class="text-center">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      );
    }
    const { name, description } = this.state.trip;
    return (
      <>
        <form>
          <div class="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              class="form-control"
              onChange={this.handleNameChange}
              name="name"
              id="name"
              value={name}
            />
          </div>
          <div class="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              class="form-control"
              onChange={this.handleDescChange}
              name="description"
              id="description"
              value={description}
            />
          </div>
          <div class="form-group">
            <label htmlFor="description">Pictures</label>
            <input
              type="img"
              class="form-control"
              onChange={this.handleImgChange}
              name="description"
              id="description"
              value={description}
            />
          </div>
          <button
            type="submit"
            class="btn btn-primary"
            onClick={this.handleEditTrip}
          >
            Submit
          </button>
        </form>
      </>
    );
  }
}
