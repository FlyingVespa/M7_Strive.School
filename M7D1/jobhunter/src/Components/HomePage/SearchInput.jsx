import React, { Component } from "react";
import {
  Container,
  InputGroup,
  Button,
  FormControl,
  Form,
} from "react-bootstrap";
import JobList from "./JobList";

export default class SearchInput extends Component {
  state = {
    search: "",
  };

  searchjobs = async (e) => {
    e.preventDefault();
    await this.props.crud.getAll(this.state.search);
  };

  render() {
    return (
      <>
        <Container className="container_searchbar">
          <Form className="pt-3" onSubmit={this.searchjobs}>
            <InputGroup className="mb-3 searchbar">
              <FormControl
                placeholder="Search..."
                value={this.state.search}
                onChange={(e) => this.setState({ search: e.target.value })}
              />
              <Button
                type="submit"
                onClick={this.searchjobs && console.log("click")}
                variant="secondary"
                id="search-btn"
              >
                Search
              </Button>
            </InputGroup>
          </Form>
          <JobList jobs={this.props.result} />
        </Container>
      </>
    );
  }
}
