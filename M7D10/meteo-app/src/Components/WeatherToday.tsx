import React from "react";
import { useState } from "react";
import { WeatherSearch } from "../Types/interface";
import { Container, Card } from "react-bootstrap";
interface WeatherSearchProps {
  results: WeatherSearch[];
  isLoading: boolean;
}

function WeatherToday({ results, isLoading }: WeatherSearchProps) {
  return (
    <>
      <Container>
        <h2>Today weather</h2>
        {results ? (
          <Card>
            <ul>
              <li>{results.main.temp}</li>
            </ul>
          </Card>
        ) : null}
      </Container>
    </>
  );
}
export default WeatherToday;
