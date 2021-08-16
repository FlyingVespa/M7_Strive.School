import React, { Component } from "react";
import { Container, InputGroup, Button, FormControl } from "react-bootstrap";
import JobList from "./JobList";

export default class SearchInput extends Component {
  state = {
    query: "",
  };

  search = async (e) => {
    e.preventDefault();
    await this.props.crud.getAll(this.state.query);
  };

  render() {
    return (
      <>
        <Container className="container_searchbar">
          <InputGroup className="mb-3 searchbar">
            <FormControl
              placeholder="Search for your dream job..."
              aria-label="Searchbar"
              aria-describedby="basic-addon2"
              value={this.state.query}
              onChange={(e) => this.setState({ query: e.target.value })}
            />
            <Button
              type="submit"
              onClick={this.searchJobs}
              variant="secondary"
              id="search-btn"
            >
              Search
            </Button>
          </InputGroup>
          <JobList jobs={this.props.jobs} />
        </Container>
      </>
    );
  }
}
