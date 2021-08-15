import React, { Component } from "react";
import { Container, Card, Button } from "react-bootstrap";

export default class CompanyPage extends Component {
  state = {
    companyDetails: null,
  };
  componentDidMount = async () =>
    this.setState({
      companyDetails: await this.props.crud.get(this.props.match.params.id),
    });
  render() {
    return (
      <>
        <Container>
          <Card>
            <Card.Header as="h5">Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="primary">More About Comapny</Button>
            </Card.Body>
          </Card>
        </Container>
      </>
    );
  }
}
