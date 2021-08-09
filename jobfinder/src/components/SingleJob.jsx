import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

export default class SingleJob extends Component {
  render() {
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            {/* <Card.Title>{this.props.job.title}</Card.Title> */}
            <Card.Text>
              <h3>some text</h3>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}
