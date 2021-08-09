import React, { Component } from "react";
import { FormControl, Button, InputGroup } from "react-bootstrap";
import JobList from "./JobList";

export default class SearchBar extends Component {
  state = {
    jobs: [],
    search: "",
  };

  componentDidMount = async () => {
    console.log("cdm");
    this.searchJobs();
  };

  searchJobs = async () => {
    const endPoint = `https://remotive.io/api/remote-jobs?search=${this.state.search}`;
    try {
      let response = await fetch(`${endPoint}=${this.props.title}`);
      if (response.ok) {
        let data = await response.json();
        this.setState({ jobs: data.jobs });
      }
    } catch (error) {}
  };

  render() {
    return (
      <>
        <InputGroup className="mb-3">
          <FormControl
            type="text"
            placeholder="Search for job"
            value={this.state.value}
            onChange={(e) =>
              this.setState({ search: e.currentTarget.value.toLowerCase() })
            }
            aria-label="searchField"
          />
          <Button onClick={() => this.searchJobs}>Search</Button>
        </InputGroup>
        <JobList jobs={this.state.jobs} />
      </>
    );
  }
}
