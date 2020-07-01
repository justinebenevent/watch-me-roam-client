import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import config from "../config";
import { Redirect } from "react-router-dom";

class StopDetails extends React.Component {
  state = {
    stop: "",
  };

  componentDidMount() {
    let id = this.props.match.params.id;
    axios
      .get(`${config.API_URL}/stopDetails/${id}`, { withCredentials: true })
      .then((res) => {
        this.setState({
          stop: res.data,
        });
      })
      .catch((err) => {
        if (err.response.status === 401) {
          this.props.history.push("/signin");
        }
      });
  }

  handleDeleteStop = () => {
    let id = this.props.match.params.id;
    axios
      .delete(`${config.API_URL}/stops/${id}`, { withCredentials: true })
      .then(() => {
        this.props.afterDelete(id);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          this.props.history.push("/signin");
        }
      });
  };

  render() {
    if (!this.props.loggedInUser) {
      return <Redirect to="/signin" />;
    }
    if (!this.state.stop) {
      return (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }
    const { location, name, description } = this.state.stop;
    let id = this.props.match.params.id;
    return (
      <>
        <p>{location}</p>
        <p>{name}</p>
        <p>{description}</p>
        <button type="submit" className="btn btn-primary">
          <Link to={`/editStop/${id}`}>Edit</Link>
        </button>
        <button
          onClick={this.handleDeleteStop}
          type="submit"
          className="btn btn-primary"
        >
          Delete
        </button>
      </>
    );
  }
}

export default withRouter(StopDetails);
