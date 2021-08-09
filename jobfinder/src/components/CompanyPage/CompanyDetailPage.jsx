import React, { Component } from "react";
import { Container, Card } from "react-bootstrap";

export default class CompanyDetailPage extends Component {
  componentDidMount = async () => {
    let companyName = this.props.match.params.company;
    try {
      const response = await fetch(
        "https://remotive.io/api/remote-jobs?company_name=" + companyName
      );
      console.log(response);
      if (response.ok) {
        let data = await response.json();
        this.setState({
          companyJobs: data.jobs,
        });
      } else {
        console.log("failed while fetching");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <Container>
          <h1 className="py-4"> DETAILS </h1>
          {this.state.company.map((job) => (
            <div className="py-2">
              <Card style={{ width: "50rem" }}>
                <Card.Body>
                  <Card.Title>{job.title}</Card.Title>
                  <br />
                  <Card.Subtitle className="mb-2 text-muted">
                    {job.company_Name}
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                    {job.job_type}
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                    {job.category}
                  </Card.Subtitle>
                  <Card.Text>
                    <div
                      dangerouslySetInnerHTML={{ __html: job.description }}
                    ></div>
                  </Card.Text>
                  <Card.Text>{job.url}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Container>
      </>
    );
  }
}
