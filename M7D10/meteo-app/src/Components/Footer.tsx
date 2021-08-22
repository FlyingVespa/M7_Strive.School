import React from "react";
import { Image } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <p className="footer-links">
        <a href="https://www.instagram.com/hedrinel/?hl=en">
          <Image className="social" src="icons/insta.png" />
        </a>
        <a href="https://www.facebook.com/hedri.nel">
          <Image className="social" src="icons/facebook.png" />
        </a>
        <a href="https://www.linkedin.com/in/hedrinel/">
          <Image className="social" src="icons/linkedin.png" />
        </a>
        <a href="https://github.com/FlyingVespa">
          <Image className="social" src="icons/github.png" />
        </a>
      </p>
      <p>Helena Nel &copy; 2015</p>
    </>
  );
}
