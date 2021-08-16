import React, { Component } from "react";
import {
  Container,
  InputGroup,
  Button,
  FormControl,
  Form,
  Row,
} from "react-bootstrap";
import JobList from "./JobList";

export default class SearchInput extends Component {
  state = {
    search: "",
    isLoading: false,
  };

  searchjobs = async (e) => {
    e.preventDefault();
    this.setState({ isLoading: true });
    await this.props.crud.getAll(this.state.search);
    console.log(this.state.search);
    console.log(this.props.result.jobs);
    this.setState({ isLoading: false });
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
        </Container>
      </>
    );
  }
}
