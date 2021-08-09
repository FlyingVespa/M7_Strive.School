import { Container, Navbar } from "react-bootstrap";
import React, { Component } from "react";

export default class NavbarTop extends Component {
  render() {
    return (
      <>
        <Navbar>
          <Container>
            <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed in as: <a href="#login">Random User</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        ;
      </>
    );
  }
}
