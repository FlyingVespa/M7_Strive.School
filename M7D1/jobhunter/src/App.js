import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchInput from "./Components/HomePage/SearchInput";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarTop from "./Components/HomePage/NavbarTop";
import JobList from "./Components/HomePage/JobList";
import React, { Component } from "react";
import CompanyPage from "./Components/CompanyPage/CompanyPage";

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
        if (!result.ok)
          throw new Error("Got data in return but status.ok is false!");
        result = await result.json();
      } catch (error) {
        console.error(error);
      }
      this.setState({ jobs: result });
    },

    get: async (companyname) => {
      let result;
      try {
        if (
          companyname === "" ||
          companyname === undefined ||
          companyname === null
        )
          throw new Error("name must be present");
        result = await fetch(
          this.crud.endpoint + "?company_name=" + companyname
        );
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
            render={(routerProps) => (
              <SearchInput
                {...routerProps}
                jobs={this.state.jobs}
                crud={this.crud}
              />
            )}
          />
          <Route
            render={(routerProps) => (
              <CompanyPage {...routerProps} crud={this.crud} />
            )}
          />
        </Router>
      </>
    );
  }
}
