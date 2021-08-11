import React, { Component } from "react";
import { Card, Button, Col } from "react-bootstrap";

export default class SingleJob extends Component {
  // state = {
  //   job: {},
  // };
  // componentDidUpdate = (prevProps) => {
  //   if (prevProps.jobs !== this.props.jobs) {
  //     this.setState({ job: this.props.jobs });
  //   }
  // };
  render() {
    return (
      <>
        <Col className="job_card">
          {console.log(this.props)}
          {this.props.job && (
            <Card>
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title>{this.props.job.title}</Card.Title>
                <Card.Text>
                  <span>{this.props.job.salary}</span>
                  <a href="/company-detail/">{this.props.job.company_name}</a>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: this.props.job.description.slice(50),
                    }}
                  />
                </Card.Text>
                <Button variant="primary">View</Button>
              </Card.Body>
            </Card>
          )}
        </Col>
      </>
    );
  }
}
