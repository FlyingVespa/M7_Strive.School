import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import JobList from "./JobList";

export default class SingleJob extends Component {
  state = {
    job: this.props.job,
  };
  render() {
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            {/* <Card.Title>{this.state.job.title}</Card.Title> */}
            <Card.Text>
              <h3>Test</h3>
              <a href="/company-detail/">job.company_name</a>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}
