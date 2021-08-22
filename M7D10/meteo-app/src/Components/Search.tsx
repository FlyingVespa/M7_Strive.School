import React from "react";
import { useState, ChangeEvent, useEffect } from "react";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Image,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { WeatherDetails } from "../types/interface";
import Weather from "./Weather";

function Search() {
  const [units, setUnits] = useState<string>("metric");
  const [query, setQuery] = useState<string>("");
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState<string>("metric");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [results, setResults] = useState<WeatherDetails | null>(null);
  const [placeholder, setPlaceholder] = useState<string>(
    "Search for weather updates by city"
  );

  const radios = [
    { name: "C", value: "metric" },
    { name: "F", value: "imperial" },
  ];
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setQuery(e.target.value);
    changeUnit(e);
  };
  const handleClick = () => {
    getCurrentWeather(query);

    setPlaceholder("Try another location...");
    console.log(placeholder);
  };
  const changeUnit = (e: any) => {
    e.target.name !== "C" ? setUnits("imperial") : setUnits("metric");
  };

  const getCurrentWeather = async (query: string) => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const apiUrl = `${process.env.REACT_APP_SEARCH_ENDPOINT}?q=${query}&units=${units}&appid=${apiKey}`;
    setIsLoading(true);
    // let url = `http://api.openweathermap.org/data/2.5/weather?q=${query}&units=${units}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
    try {
      let response = await fetch(apiUrl);
      if (response.ok) {
        let res = await response.json();
        console.log(res);
        setResults(res);
        setIsLoading(false);
        console.log(apiUrl);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container className="searchbar_container">
        <InputGroup className="mb-3">
          <FormControl onChange={handleChange} placeholder={placeholder} />
          <Button onClick={handleClick} variant="secondary" id="search-btn">
            Search
          </Button>
          <ButtonGroup id="radio_btn" className="ml-5">
            {radios.map((radio, i: number) => (
              <ToggleButton
                key={i}
                id={`radio-${i}`}
                type="radio"
                variant={i % 2 ? "outline-secondary" : "outline-secondary"}
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => {
                  setUnits(e.target.value);
                  setRadioValue(e.currentTarget.value);
                }}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </InputGroup>

        {results ? (
          <Weather data={results} isLoading={isLoading} />
        ) : (
          <Image src="logo.png" id="main_logo" />
        )}
      </Container>
    </>
  );
}

export default Search;
