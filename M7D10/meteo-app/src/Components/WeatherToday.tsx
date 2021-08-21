import React from "react";
import { useState } from "react";
import { WeatherDetails } from "../types/interface";
import { Container, Card } from "react-bootstrap";
interface WeatherSearchProps {
  data: WeatherDetails;
  isLoading: boolean;
}

function WeatherToday({ data, isLoading }: WeatherSearchProps) {
  return (
    <>
      <Container>
        <h2>Today weather</h2>

        {data && (
          <Card>
            <span>{data.main.temp}</span>;<span>{data.main.temp_min}</span>;
          </Card>
        )}
      </Container>
    </>
  );
}
export default WeatherToday;
