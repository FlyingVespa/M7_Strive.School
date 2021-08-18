import "../styles/style.css";
import { Component } from "react";
import { Container, Navbar, Row, Nav, Image } from "react-bootstrap";
import { SiApplemusic } from "react-icons/si";

class MyNav extends Component {
  state = {};

  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark" className="navbar_top mb-5">
          <Container>
            <Image src="mic.png" id="mic_logo" roundedCircle />
            <Navbar.Brand href="#home">BeatBox</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Favorites</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default MyNav;
