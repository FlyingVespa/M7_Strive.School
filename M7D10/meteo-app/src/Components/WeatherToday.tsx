import React from "react";
import { useState } from "react";
import { Test } from "../types/interface";
import { Container, Card } from "react-bootstrap";
interface WeatherSearchProps {
  data: Test[];
  isLoading: boolean;
}

function WeatherToday({ data, isLoading }: WeatherSearchProps) {
  return (
    <>
      <Container>
        <h2>Today weather</h2>
        {data ? (
          <Card>
            <ul>
              {/* <li>{data.main.temp}</li>
              <li>{data.weather.icon}</li>
              <li>{data.main.temp}</li> */}
            </ul>
          </Card>
        ) : (
          <h1>bollocks</h1>
        )}
      </Container>
    </>
  );
}
export default WeatherToday;
