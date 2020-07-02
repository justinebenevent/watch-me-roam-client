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
      .get(`${config.API_URL}/home`, { withCredentials: true })
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
        {!this.state.trips.length && this.state.failedToLoad ? (
          <p>No trips yet</p>
        ) : null}

        {this.state.trips.length
          ? this.state.trips.map((trip, i) => {
              return (
                <div key={i} className="card" style={{ width: "#18rem" }}>
                  <img src="..." class="card-img-top" alt="..." />
                  <Link to={`/tripOverview/${trip._id}`}>
                    <h5 class="card-title">{trip.name} </h5>
                  </Link>
                </div>
              );
            })
          : null}
      </>
    );
  }
}
