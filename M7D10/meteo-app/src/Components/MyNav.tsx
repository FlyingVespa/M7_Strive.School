import { Component } from "react";
import { Container, Navbar, Nav, Image } from "react-bootstrap";

class MyNav extends Component {
  state = {};

  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark" className="navbar_top mb-5">
          <Container>
            <Image src="logo.png" id="logo" roundedCircle />
            <Navbar.Brand href="/">Meteo</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Favs">Favorites</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default MyNav;
