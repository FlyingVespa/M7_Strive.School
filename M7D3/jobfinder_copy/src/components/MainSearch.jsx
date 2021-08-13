import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Job from "./Job";
import uniqid from "uniqid";
import { StarFill } from "react-bootstrap-icons";
export default class MainSearch extends React.Component {
  state = {
    search: "",
    jobs: [],
  };

  baseEndpoint = "https://remotive.io/api/remote-jobs?search=";

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(this.baseEndpoint + this.state.search);

    if (!response.ok) {
      alert("Error fetching results");
      return;
    }

    const { jobs } = await response.json();
    this.setState({ jobs });
  };

  render() {
    return (
      <Container>
        <Button to="/Fav">
          Favroites
          <StarFill />
        </Button>
        <Row>
          <Col xs={10} className="mx-auto my-3">
            <h1>Remote Jobs Search</h1>
          </Col>
          <Col xs={10} className="mx-auto">
            <Form onSubmit={this.handleSubmit}>
              <Form.Control
                type="search"
                value={this.state.search}
                onChange={this.handleChange}
              />
            </Form>
          </Col>
          {this.state.jobs.map((jobData) => (
            <Job key={uniqid()} data={jobData} />
          ))}
        </Row>
      </Container>
    );
  }
}
