import React from "react";
import { WeatherSearch } from "../Types/interface";
import { Container } from "react-bootstrap";
interface WeatherSearchProps {
  weather: WeatherSearch[];
  isLoading: boolean;
}

function WeatherToday({ weather, isLoading }: WeatherSearchProps) {
  return (
    <>
      <Container>
        <h2>Today weather</h2>
      </Container>
    </>
  );
}
export default WeatherToday;
