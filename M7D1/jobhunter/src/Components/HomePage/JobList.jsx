import React, { Component } from "react";
import { Container, Image } from "react-bootstrap";
import JobTemplate from "./JobTemplate";
import uniqid from "uniqid";

export default class JobList extends Component {
  state = {};
  render() {
    return (
      <>
        <Container>
          {this.props.jobs && this.props.result.jobs.length > 0 ? (
            this.props.jobs.map((job, i) => {
              <JobTemplate job={this.job} key={i} />;
              console.log("Search results", job);
            })
          ) : (
            <h2>Nothing</h2>
          )}

          <Image className="joblogo_big" src="logo.png"></Image>
          <JobTemplate />
        </Container>
      </>
    );
  }
}
