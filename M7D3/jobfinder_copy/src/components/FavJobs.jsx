import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Job from "./Job";

export default class FavJobs extends Component {
  render() {
    return (
      <>
        <Container>
          <h2>List of fav jobs</h2>

          {/* {this.state.jobs.map((jobData) => (
            <Job data={jobData} />
          ))} */}
        </Container>
      </>
    );
  }
}
