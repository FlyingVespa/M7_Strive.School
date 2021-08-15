import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Star, StarFill } from "react-bootstrap-icons";
export default class JobTemplate extends Component {
  render() {
    const { company_name, title, salary } = this.props;
    return (
      <>
        <Card style={{ width: "20rem" }}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Text>{salary}</Card.Text>
            <Card.Text>{company_name}</Card.Text>
            <Button variant="primary">
              <Star />
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}
