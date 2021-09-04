import React, { Component } from "react";
import { Container, Nav, Navbar, Image, Row, Col } from "react-bootstrap";
import { CardList, StarFill } from "react-bootstrap-icons";

export default class NavbarTop extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark" className="navbar_top mb-5">
          <Container>
            <Image src="logo.png" roundedCircle></Image>
            <Navbar.Brand href="/" className="mr-5">
              JobHunter
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="favorites">Favorites</Nav.Link>
              <Nav.Link href="company">List All Companies</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}
