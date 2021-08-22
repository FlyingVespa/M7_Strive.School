import React from "react";
import { Container, Card, Image, Row, Col } from "react-bootstrap";
import { Forecast } from "../types/interfaceForecast";

interface Props {
  forecast: Forecast[];
  isLoading: boolean;
}

export default function Weather4DayForecast({ forecast, isLoading }: Props) {
  return (
    <>
      <Container>
        <h2>Today weather</h2>
        <p id="date"></p>
        { forecast &&  forecast.map(weather) => (
          <Container>
            <Row>
              <Col xs={6}>
                <Image
                  id="weather_icon"
                  src={`weathericon/${weather.list.id}.svg`}
                />
              </Col>
              <Col xs={6}>
                <h3>
                  {weather.name}, {weather.sys.country}
                </h3>
                <p id="main_temp">{weather.main.temp}</p>
                <p>{weather.main.humidity}</p>
                <p>{weather.weather[0].description.toUpperCase()}</p>;
              </Col>
            </Row>
          </Container>
        )}
      </Container>
    </>
  );
}
