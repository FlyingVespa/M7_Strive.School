import React, { Component } from "react";
import { Card, Button, Col, Badge, Spinner } from "react-bootstrap";
import { Star, StarFill } from "react-bootstrap-icons";
export default class JobTemplate extends Component {
  state = {
    isSelected: false,
  };
  render() {
    return (
      <>
        {this.state.isLoading === true ? (
          <div className="ml-2">
            <Spinner animation="border" variant="success" />
          </div>
        ) : (
          <Col lg={3} md={6} sm={12} className="mt-2">
            <Card className=" p-0 m-0">
              <Card.Body>
                <Card.Title>{this.props.job.title}</Card.Title>
                <p>{this.props.job.catagory}</p>
                <p>{this.props.job.job_type}</p>
                <p>{this.props.job.company_name}</p>
              </Card.Body>
              <Badge className="fav_badge">
                <StarFill />
              </Badge>
            </Card>
          </Col>
        )}
      </>
    );
  }
}
