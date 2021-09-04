import React, { Component } from "react";
import { Container, Nav, Navbar, Image } from "react-bootstrap";
export default class NavbarTop extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark" className="navbar_top mb-5">
          <Container>
            <Image src="logo.png" roundedCircle></Image>
            <Navbar.Brand href="#home">JobHunter</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Favroites</Nav.Link>
              <Nav.Link href="#pricing">List All Companies</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}
