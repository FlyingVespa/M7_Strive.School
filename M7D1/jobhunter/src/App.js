import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Row } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import SearchInput from "./Components/HomePage/SearchInput";
import NavbarTop from "./Components/HomePage/NavbarTop";
import JobList from "./Components/HomePage/JobList";
import CompanyPage from "./Components/CompanyPage/CompanyPage.jsx";
export default class App extends Component {
  state = {
    result: "",
  };

  crud = {
    endpoint: "https://remotive.io/api/remote-jobs",

    getAll: async (query) => {
      try {
        let response = await fetch(
          "https://remotive.io/api/remote-jobs?search=" + query
        );
        if (response.ok) {
          let result = await response.json();
          this.setState({ result: result });
        } else {
          throw new Error("got data but somethign wrtong");
        }
      } catch (error) {
        console.error(error);
      }
    },
  };
  render() {
    return (
      <>
        <NavbarTop />
        <Router>
          <Route
            path="/"
            exact
            render={(routerProps) => (
              <SearchInput
                {...routerProps}
                result={this.state.result}
                crud={this.crud}
              />
            )}
          />
          <Route
            path="/jobs"
            render={(routerProps) => (
              <JobList
                {...routerProps}
                result={this.state.result}
                crud={this.crud}
              />
            )}
          />
          <Route
            path="/company_name/:id"
            render={(routerProps) => (
              <CompanyPage
                {...routerProps}
                result={this.state.result}
                crud={this.crud}
              />
            )}
          />
        </Router>
      </>
    );
  }
}
