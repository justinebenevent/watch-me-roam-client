import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import config from "../config";
import { withRouter } from "react-router";

class TripOverview extends React.Component {
  state = {
    stops: [],
    tripId: undefined,
  };

  getStops = () => {
    let tripId = this.props.match.params.trip_id;
    axios
      .get(`${config.API_URL}/tripOverview/${tripId}`, {
        withCredentials: true,
      })
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
    console.log(this.props.match.params);
    this.setState({ tripId: this.props.match.params.trip_id });
  }
  render() {
    //let tripId = this.props.match.params.tripId;
    return (
      <>
        <div>
          <Link to={`/createStop/${this.state.tripId}`}>
            <button type="button" class="btn btn-outline-primary">
              Create a new stop
            </button>
          </Link>
        </div>

        {!this.state.stops.length && this.state.failedToLoad ? (
          <p>No stops yet</p>
        ) : null}

        {this.state.stops.length
          ? this.state.stops.map((stop, i) => {
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
                  <button type="submit" className="btn btn-primary btn-sm">
                    <Link to={`/editStop/${stop.id}`}>Edit</Link>
                  </button>
                  <button
                    onClick={this.handleDeleteStop}
                    type="submit"
                    className="btn btn-secondary btn-sm"
                  >
                    Delete
                  </button>
                </div>
              );
            })
          : null}
      </>
    );
  }
}

export default withRouter(TripOverview);
