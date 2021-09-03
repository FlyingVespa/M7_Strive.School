import React from "react";
import { Container, Nav, Navbar, Image, Row, Col } from "react-bootstrap";
import { Linkedin, Facebook, Github, Twitter } from "react-bootstrap-icons";

export const Footer = () => {
  let year = new Date().getFullYear();

  return (
    <>
      <Navbar
        bg="dark"
        variant="danger"
        className="navbar_bottom fixed-bottom mt-5"
      >
        <p href="/">Hedri Nel {year}©</p>
        <Nav.Link href="https://www.linkedin.com/in/hedrinel/">
          <Linkedin />
        </Nav.Link>
        <Nav.Link
          target="_blank"
          href="https://github.com/FlyingVespa/M7_Strive.School/tree/main/M7D1/jobhunter"
        >
          <Github />
        </Nav.Link>
        <Nav.Link href="company">
          <Twitter />
        </Nav.Link>
      </Navbar>
    </>
  );
};
