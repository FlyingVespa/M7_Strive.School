import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import SearchInput from "./Components/HomePage/SearchInput";
import NavbarTop from "./Components/HomePage/NavbarTop";

export default class App extends Component {
  state = {
    jobs: null,
  };

  crud = {
    endpoint: "https://remotive.io/api/remote-jobs",

    getAll: async (query) => {
      let result;
      try {
        result = await fetch(this.crud.endpoint + "?search=" + query);
        if (!result.ok) throw new Error("result not ok.");
        result = await result.json();
      } catch (error) {
        console.error(error);
      }
      this.setState({ jobs: result });
    },

    render() {
      return (
        <>
          <NavbarTop />
          <Router>
            <Route
              render={(routerProps) => (
                <SearchInput
                  {...routerProps}
                  jobs={this.state.jobs}
                  crud={this.crud}
                />
              )}
            />
          </Router>
        </>
      );
    },
  };
}
