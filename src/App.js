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

class App extends Component {
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
      })
      .catch((err) => {
        if (err.response.status === 401) {
          this.props.history.push("/login");
        }
      });
  };

  render() {
    return (
      <>
        <div className="App">
          <h1>Watch me roam</h1>
          <div>
            <Switch>
              <Route
                exact
                path="/"
                render={() => {
                  return (
                    <>
                      <SignUp />
                      <h1>Hello</h1>
                    </>
                  );
                }}
              />
              <Route exact path="/CreateTrip" component={CreateTrip} />
              <Route exact path="/home" />
            </Switch>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(App);
