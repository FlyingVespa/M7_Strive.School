import React, { Component } from "react";
import { Card, Button, Col, Badge } from "react-bootstrap";
import { Star, StarFill } from "react-bootstrap-icons";
import { jobType } from "../../tools";
export default class JobTemplate extends Component {
  state = {
    isSelected: false,
    isLoading: true,
  };
  render() {
    return (
      <>
        <Col className="mt-2">
          <Card className=" p-0 m-0" style={{ width: "15rem" }}>
            <Card.Body>
              <Card.Title>{this.props.job.title}</Card.Title>
              <p>{this.props.job.catagory}</p>
              <p>{this.props.job.job_type}</p>
              <p>{this.props.job.company_name}</p>
              <Button variant="primary">
                <Star />
              </Button>
            </Card.Body>
            <Badge className="fav_badge">
              <StarFill />
            </Badge>
          </Card>
        </Col>
      </>
    );
  }
}
