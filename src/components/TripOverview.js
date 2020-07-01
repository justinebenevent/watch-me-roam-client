import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import config from "../config";

export default class TripOverview extends React.Component {
  state = {
    stops: [],
  };

  getStops = () => {
    axios
      .get(`${config.API_URL}/tripOverview`, { withCredentials: true })
      .then((res) => {
        this.setState({
          stops: res.data,
        });
        console.log(res);
      })
      .catch((err) => {
        //the request failed
        this.setState({ failedToLoad: true });
      });
  };

  componentDidMount() {
    this.getStops();
  }
  render() {
    if (this.state.failedToLoad) {
      return <p>Failed to load</p>;
    }
    //if there is no state, or if there is a state but no stops
    if (!this.state.stops.length) {
      return <p>...Loading</p>;
    }

    return (
      <>
        {this.state.stops.map((stop, i) => {
          return (
            <p key={i}>
              <Link to={`/stopDetails/${stop._id}`}>{stop.name}</Link>
            </p>
          );
        })}
      </>
    );
  }
}
