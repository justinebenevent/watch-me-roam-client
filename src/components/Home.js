import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import config from "../config";

export default class Home extends React.Component {
  getTrips = () => {
    axios
      .get(`${config.API_URL}/home`)
      .then((res) => {
        this.setState({
          trips: res.data,
        });
        console.log(res);
      })
      .catch((err) => {
        //the request failed
        this.setState({ failedToLoad: true });
      });
  };

  componentDidMount() {
    this.getTrips();
  }
  render() {
    if (this.state !== null && this.state.failedToLoad) {
      return <p>Failed to load</p>;
    }
    //if there is no state, or if there is a state but no trips
    if (!this.state || !this.state.trips) {
      return <p>...Loading</p>;
    }

    return (
      <>
        {this.state.trips.map((trip, i) => {
          return (
            <p key={i}>
              <Link to={`/home/${trip._id}`}>{trip.name}</Link>
            </p>
          );
        })}
      </>
    );
  }
}
