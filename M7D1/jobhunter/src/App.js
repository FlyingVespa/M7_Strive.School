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
    isLoading: false,
  };

  crud = {
    endpoint: "https://remotive.io/api/remote-jobs",

    getAll: async (query) => {
      this.setState({
        isLoading: true,
      });
      try {
        let response = await fetch(
          "https://remotive.io/api/remote-jobs?search=" + query
        );
        if (response.ok) {
          this.setState({ isLoading: false });
          let result = await response.json();
          this.setState({ result: result });
        } else {
          this.setState({
            isLoading: false,
          });
          throw new Error("got data but somethign wrtong");
        }
      } catch (error) {
        console.error(error);
        this.setState({
          isLoading: false,
        });
      }
    },
    get: async (name) => {
      let result;
      try {
        if (name === "" || name === undefined || name === null)
          throw new Error("name must be present");
        result = await fetch(this.crud.endpoint + "?company_name=" + name);
        if (!result.ok)
          throw new Error("Got data in return but status.ok is false!");
        result = await result.json();
      } catch (error) {
        console.error(error);
        return null;
      }
      return await result;
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
            path="/"
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
            exact
            render={(routerProps) => (
              <CompanyPage
                {...routerProps}
                result={this.state.result}
                crud={this.crud}
                isLoading={this.state.isLoading}
              />
            )}
          />
        </Router>
      </>
    );
  }
}
