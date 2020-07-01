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
        <div>
          <Link to={"/createStop"}>
            <button type="button" class="btn btn-outline-primary">
              Create a new stop
            </button>
          </Link>
        </div>
        {this.state.stops.map((stop, i) => {
          return (
            <div key={i} className="list-group">
              <Link
                className="list-group-item list-group-item-action"
                to={`/stopDetails/${stop._id}`}
              >
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">{stop.name}</h5>
                  <small>
                    {stop.startDate}
                    {/* {new Intl.DateTimeFormat("en-GB", {
                      year: "numeric",
                      month: "long",
                      day: "2-digit",
                    }).format(stop.startDate)} */}
                  </small>
                </div>
                <p class="mb-1">{stop.description}</p>
                <small>{stop.location}</small>
              </Link>
            </div>
          );
        })}
      </>
    );
  }
}
//   <Link to={`/stopDetails/${stop._id}`}>
//     {stop.name}, {stop.location}
//   </Link>
