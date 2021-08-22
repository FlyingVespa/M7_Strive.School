import React from "react";
import { useState } from "react";
import { WeatherDetails } from "../types/interface";
import { Container, Card, Image, Row, Col } from "react-bootstrap";
interface WeatherSearchProps {
  data: WeatherDetails;
  isLoading: boolean;
}

function WeatherToday({ data, isLoading }: WeatherSearchProps) {
  const layer = "temp_new";
  const z: number = 10;
  const x: number = data && Math.abs(Math.round(data.coord.lon * z));
  const y: number = data && Math.abs(Math.round(data.coord.lat * z));
  return (
    <>
      <Container>
        <h2>Today weather</h2>
        <p id="date"></p>
        {data && (
          <Container>
            <Row>
              <Col xs={6}>
                <Image
                  id="weather_icon"
                  src={`weathericon/${data.weather[0].id}.svg`}
                />
              </Col>
              <Col xs={6}>
                <h3>
                  {data.name}, {data.sys.country}
                </h3>
                <p id="main_temp">{data.main.temp}</p>
                <p>{data.main.humidity}</p>
                <p>{data.weather[0].description.toUpperCase()}</p>;
                <Image
                  src={`https://tile.openweathermap.org/map/${layer}/${z}/${x}/${y}.png?appid=${process.env.REACT_APP_WEATHER_API}`}
                />
              </Col>
            </Row>
          </Container>
        )}
      </Container>
    </>
  );
}
export default WeatherToday;
