import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import axios from "axios";
import { Switch, Route, withRouter } from "react-router-dom";
import config from "./config";
import CreateTrip from "./components/CreateTrip";
import Home from "./components/Home";
import CreateStop from "./components/CreateStop";
import EditStop from "./components/EditStop";
import EditTrip from "./components/EditTrip";
import NavBar from "./components/NavBar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import StopDetails from "./components/StopDetails";
import Landing from "./components/Landing";
import TripOverview from "./components/TripOverview";

class App extends Component {
  state = {
    trips: [],
    stops: [],
    loggedInUser: null,
    currentTrip: "",
  };

  // getTrips = () => {
  //   axios
  //     .get(`${config.API_URL}/home`)
  //     .then((res) => {
  //       this.setState({
  //         trips: res.data,
  //       });
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       //the request was unauthorized
  //       if (err.response.status === 401) {
  //         this.props.history.push("/signin");
  //       }
  //     });
  // };

  getUser() {
    axios
      .get(`${config.API_URL}/user`, { withCredentials: true })
      .then((res) => {
        console.log("hello");
        this.setState({
          loggedInUser: res.data,
        });
      })
      .catch((err) => {
        if (err.response.status === 401) {
          //this.props.history.push("/signin");
        }
      });
  }

  componentDidMount() {
    // this.getTrips();
    if (!this.state.loggedInUser) {
      this.getUser();
    }
  }

  handleCreateTrip = (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let description = e.target.description.value;
    let startDate = e.target.startDate.value;

    axios
      .post(
        `${config.API_URL}/createTrip`,
        {
          name: name,
          description: description,
          startDate: startDate,
        },
        { withCredentials: true }
      )
      .then((res) => {
        this.setState(
          {
            trips: [...this.state.trips, res.data],
          },
          () => {
            this.props.history.push("/home");
          }
        );
        // this.setState({} , function)
      })
      .catch((err) => {
        if (err.response.status === 401) {
          this.props.history.push("/signin");
        }
      });
  };
  handleCreateStop = (e, tripId) => {
    e.preventDefault();
    let location = e.target.location.value;
    let name = e.target.name.value;
    let description = e.target.description.value;
    let startDate = e.target.startDate.value;
    let image = e.target.image.files[0];

    let uploadData = new FormData();
    uploadData.append("imageUrl", image);

    //cloudinary request
    axios.post(`${config.API_URL}/upload`, uploadData).then((res) => {
      console.log(res);
      axios
        .post(
          `${config.API_URL}/createStop`,
          {
            location: location,
            name: name,
            description: description,
            startDate: startDate,
            image: res.data.secure_url,
            tripId,
          },
          { withCredentials: true }
        )
        .then((res) => {
          this.setState(
            {
              stops: [...this.state.stops, res.data],
            },
            () => {
              this.props.history.push(`/tripOverview/${tripId}`);
            }
          );
        })
        .catch((err) => {
          if (err.response.status === 401) {
            this.props.history.push("/signin");
          }
        });
    });
  };

  handleDelete = (id) => {
    //filter trips
    let newTrips = this.state.trips.filter((trip) => {
      return trip._id !== id;
    });

    this.setState(
      {
        trips: newTrips,
      },
      () => {
        this.props.history.push("/");
      }
    );
    console.log(this.state.trips);
  };

  handleLogout = () => {
    //console.log(document.cookie)
    axios
      .post(`${config.API_URL}/logout`, {}, { withCredentials: true })
      .then((res) => {
        console.log(res);
        this.setState(
          {
            loggedInUser: null,
          },
          () => {
            this.props.history.push("/");
          }
        );
      });
  };

  handleSignIn = (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;

    axios
      .post(
        `${config.API_URL}/signin`,
        {
          email: email,
          password: password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        this.setState(
          {
            loggedInUser: res.data,
          },
          () => {
            this.props.history.push("/home");
          }
        );
      });
  };

  handleSignUp = (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let username = e.target.username.value;
    let password = e.target.password.value;
    axios
      .post(
        `${config.API_URL}/signup`,
        {
          email: email,
          username: username,
          password: password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        this.setState(
          {
            loggedInUser: res.data,
          },
          () => {
            this.props.history.push("/");
          }
        );
      });
  };

  // componentDidUpdate() {
  //   if (!window.location.href.includes("signin")) {
  //     this.getTrips();
  //   }
  // }

  render() {
    const { loggedInUser } = this.state;
    console.log(loggedInUser);
    return (
      <>
        <NavBar
          loggedInUser={this.state.loggedInUser}
          onLogout={this.handleLogout}
        />
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route
              exact
              path="/home"
              render={() => {
                return <Home trips={this.state.trips} />;
              }}
            />
            <Route
              path="/createTrip"
              render={() => {
                return (
                  <CreateTrip
                    loggedInUser={loggedInUser}
                    onAdd={this.handleCreateTrip}
                  />
                );
              }}
            />
            <Route
              path="/tripOverview/:trip_id"
              render={() => {
                return <TripOverview loggedInUser={loggedInUser} />;
              }}
            />
            <Route
              path="/editTrip/:id"
              render={() => {
                return <EditTrip loggedInUser={loggedInUser} />;
              }}
            />
            <Route
              path="/editStop/:id"
              render={() => {
                return <EditStop loggedInUser={loggedInUser} />;
              }}
            />
            <Route
              path="/CreateStop"
              render={() => {
                return (
                  <CreateStop
                    loggedInUser={loggedInUser}
                    onAdd={this.handleCreateStop}
                  />
                );
              }}
            />
            <Route
              exact
              path="/stopDetails/:id"
              render={() => {
                return (
                  <StopDetails
                    loggedInUser={loggedInUser}
                    afterDelete={this.handleDelete}
                  />
                );
              }}
            />

            <Route
              path="/signin"
              render={() => {
                return <SignIn onSignIn={this.handleSignIn} />;
              }}
            />
            <Route
              path="/signup"
              render={() => {
                return <SignUp onSignUp={this.handleSignUp} />;
              }}
            />
          </Switch>
        </div>
      </>
    );
  }
}

export default withRouter(App);
