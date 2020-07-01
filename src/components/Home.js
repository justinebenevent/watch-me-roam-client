import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import config from "../config";

export default class Home extends React.Component {
  state = {
    trips: [],
  };
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
    return (
      <>
        <div>
          <Link to={"/createtrip"}>link to createTrip</Link>
        </div>
        {this.state !== null && this.state.failedToLoad ? (
          <p>No trips yet</p>
        ) : null}

        {!this.state || !this.state.trips
          ? this.state.trips.map((trip, i) => {
              return (
                <p key={i}>
                  <Link to={`/home/${trip._id}`}>{trip.name}</Link>
                </p>
              );
            })
          : null}
      </>
    );
  }
}
