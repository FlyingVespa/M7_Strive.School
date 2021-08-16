import React, { Component } from "react";
import { Container, Image } from "react-bootstrap";
import JobTemplate from "./JobTemplate";

export default class JobList extends Component {
  render() {
    return (
      <>
        <Container>
          {this.props.jobs &&
            this.props.jobs.map((job, i) => {
              <JobTemplate job={job} key={i} />;
            })}

          <Image className="joblogo_big" src="logo.png"></Image>
          <JobTemplate />
        </Container>
      </>
    );
  }
}
