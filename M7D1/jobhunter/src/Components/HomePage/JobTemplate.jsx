import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Star } from "react-bootstrap-icons";

export default class JobTemplate extends Component {
  render() {
    return (
      <>
        <Card style={{ width: "20rem" }}>
          <Card.Body>
            <Card.Title>{this.props.job.title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Text>{this.props.job.salary}</Card.Text>
            <Card.Text>{this.props.job.company_name}</Card.Text>
            <Button variant="primary">
              <Star />
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}
