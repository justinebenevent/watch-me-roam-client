import React from "react";
import axios from "axios";
import config from "../config";
import { withRouter } from "react-router";

class EditTrip extends React.Component {
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
        `${config.API_URL}/editTrip/${id}`,
        {
          name: this.state.trip.name,
          description: this.state.trip.description,
          startDate: this.state.trip.startDate,
        },
        { withCredentials: true }
      )
      .then((res) => {});
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

  handleDateChange = (e) => {
    let newTrip = JSON.parse(JSON.stringify(this.state.trip));
    newTrip.startDate = e.target.value;

    this.setState({
      trip: newTrip,
    });
  };

  render() {
    if (!this.props.loggedInUser || !this.state.stop) {
      return (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
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
    const { name, description, startDate } = this.state.trip;
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
            <label htmlFor="startDate">Start date</label>
            <input
              type="date"
              class="form-control"
              onChange={this.handleDateChange}
              name="startDate"
              id="startDate"
              value={startDate}
            />
          </div>
          <button
            type="submit"
            class="btn btn-primary"
            onClick={this.handleEditTrip}
          >
            Confirm change
          </button>
        </form>
      </>
    );
  }
}

export default withRouter(EditTrip);
