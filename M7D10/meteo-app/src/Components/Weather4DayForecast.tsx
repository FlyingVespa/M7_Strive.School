import React from "react";
import { Container, Card, Image } from "react-bootstrap";
import { Test } from "../types/interface";

export default function Weather4DayForecast() {
  return (
    <div>
      <Container>
        <h2>4 day forecast</h2>
        <Card>
          <Image src="logo.png" />
        </Card>
      </Container>
    </div>
  );
}
