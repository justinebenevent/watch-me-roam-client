import React from "react";
import axios from "axios";
import config from "../config";
import { withRouter } from "react-router";

class EditStop extends React.Component {
  state = {
    stop: "",
  };

  componentDidMount() {
    console.log(this.props);
    const id = this.props.match.params.id;
    axios
      .get(`${config.API_URL}/editStop/${id}`, { withCredentials: true })
      .then((res) => {
        this.setState({
          stop: res.data,
        });
      });
  }

  handleEditStop = (e) => {
    e.preventDefault();
    let id = this.props.match.params.id;
    // let uploadData = new FormData();
    // uploadData.append("imageUrl", image)
    axios
      .patch(
        `${config.API_URL}/editStop/${id}`,
        {
          location: this.state.stop.location,
          name: this.state.stop.name,
          description: this.state.stop.description,
          startDate: this.state.stop.startDate,
          image: this.state.stop.image,
        },
        { withCredentials: true }
      )
      .then((res) => {});
  };

  handleLocationChange = (e) => {
    let newStop = JSON.parse(JSON.stringify(this.state.stop));
    newStop.location = e.target.value;

    this.setState({
      stop: newStop,
    });
  };

  handleNameChange = (e) => {
    let newStop = JSON.parse(JSON.stringify(this.state.stop));
    newStop.name = e.target.value;

    this.setState({
      stop: newStop,
    });
  };

  handleDescChange = (e) => {
    let newStop = JSON.parse(JSON.stringify(this.state.stop));
    newStop.description = e.target.value;

    this.setState({
      stop: newStop,
    });
  };

  handleDateChange = (e) => {
    let newStop = JSON.parse(JSON.stringify(this.state.stop));
    newStop.startDate = e.target.value;

    this.setState({
      stop: newStop,
    });
  };

  handleImageChange = (e) => {
    let newStop = JSON.parse(JSON.stringify(this.state.stop));
    newStop.image = e.target.value;

    this.setState({
      stop: newStop,
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
    if (!this.state.stop) {
      return (
        <div class="text-center">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      );
    }
    const { location, name, description, startDate, image } = this.state.stop;
    return (
      <>
        <form>
          <div class="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              class="form-control"
              onChange={this.handleLocationChange}
              name="location"
              id="location"
              value={location}
            />
          </div>
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
          <div class="form-group">
            <label htmlFor="image">Pictures</label>
            <input
              type="file"
              class="form-control"
              onChange={this.handleLocationChange}
              name="image"
              id="image"
              value={image}
            />
          </div>
          <button
            type="submit"
            class="btn btn-primary"
            onClick={this.handleEditStop}
          >
            Confirm change
          </button>
        </form>
      </>
    );
  }
}

export default withRouter(EditStop);
