import React, { Component } from "react";
import SingleJob from "./SingleJob";

import { Row, Container, Col } from "react-bootstrap";
export default class JobList extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            {this.props.jobs.map((job) => {
              return <SingleJob job={job} />;
            })}
          </Row>
        </Container>
      </>
    );
  }
}