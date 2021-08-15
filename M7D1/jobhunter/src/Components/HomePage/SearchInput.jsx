import React, { Component } from "react";
import { Container, InputGroup, Button, FormControl } from "react-bootstrap";
import JobList from "./JobList";

export default class SearchInput extends Component {
  state = {
    search: "",
  };

  search = async (e) => {
    e.preventDefault();
    await this.props.crud.getAll(this.state.search);
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
              value={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })}
            />
            <Button variant="secondary" id="button-addon2">
              Search
            </Button>
          </InputGroup>
          <JobList jobs={this.state.search} />
        </Container>
      </>
    );
  }
}
