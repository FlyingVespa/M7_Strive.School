import React, { Component } from "react";
import { Image, Row, Container } from "react-bootstrap";
import JobTemplate from "./JobTemplate";

export default class JobList extends Component {
  render() {
    return (
      <>
        <Row>
          {this.props.result && this.props.result.jobs.length > 0 ? (
            this.props.result.jobs.map((job, i) => (
              <JobTemplate job={job} key={i} />
            ))
          ) : this.props.result ? (
            <h1 className="text-center p-5">No results found</h1>
          ) : (
            <Image className="joblogo_big" src="logo.png"></Image>
          )}
        </Row>
      </>
    );
  }
}
