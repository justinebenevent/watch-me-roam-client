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
    loggedInUser: null,
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
        //the request was unauthorized
        if (err.response.status === 401) {
          this.props.history.push("/signin");
        }
      });
  };

  handleSignIn = (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;

    axios
      .post(`${config.API_URL}/signin`, {
        email: email,
        password: password,
      })
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

  componentDidUpdate() {
    if (!window.location.href.includes("signin")) {
      this.getTrips();
    }
  }

  render() {
    const { loggedInUser } = this.state;
    return (
      <>
        <div className="App">
          <h1>Watch me roam</h1>

          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
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
            <Route
              path="/home"
              render={() => {
                return <Home />;
              }}
            />
          </Switch>
        </div>
      </>
    );
  }
}

export default withRouter(App);
