import React from "react";
import axios from "axios";
import config from "../config";
import { Redirect } from "react-router-dom";

export default class EditStop extends React.Component {
  state = {
    stop: "",
  };

  componentDidMount() {
    let id = this.props.match.params.id;
    axios
      .get(`${config.API_URL}/stops/${id}`, { withCredentials: true })
      .then((res) => {
        this.setState({
          stop: res.data,
        });
      });
  }

  handleEditStop = (e) => {
    e.preventDefault();
    let id = this.props.match.params.id;
    axios
      .patch(
        `${config.API_URL}/stops/${id}`,
        {
          name: this.state.stop.name,
          description: this.state.stop.description,
        },
        { withCredentials: true }
      )
      .then((res) => {
        //redirect to App.js
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

  render() {
    if (!this.props.loggedInUser) {
      return <Redirect to="/sign-in" />;
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
    const { name, description } = this.state.stop;
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
            onClick={this.handleEditStop}
          >
            Submit
          </button>
        </form>
      </>
    );
  }
}
