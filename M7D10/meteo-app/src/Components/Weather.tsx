import React from "react";
import { Tab, Nav, Col, Row, Container } from "react-bootstrap";
import Weather4DayForecast from "./Weather4DayForecast";
import WeatherToday from "./WeatherToday";
import { WeatherSearch } from "../Types/interface";

interface WeatherSearchProps {
  weather: WeatherSearch[];
  isLoading: boolean;
}

function Weather({ weather, isLoading }: WeatherSearchProps) {
  return (
    <div>
      <Container className="weather_container">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Current Forecast</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">4 Day Forecast</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <WeatherToday weather={weather} />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Weather4DayForecast />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
}
export default Weather;
