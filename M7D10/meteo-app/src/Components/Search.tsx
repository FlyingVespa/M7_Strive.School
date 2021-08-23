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
  Dropdown,
  DropdownButton,
  Row,
} from "react-bootstrap";
import { WeatherDetails } from "../types/interface";
import Weather from "./Weather";
import countries from "../json/countries.json";
import { Forecast } from "../types/interfaceForecast";

function Search() {
  const [units, setUnits] = useState<string>("metric");
  const [city, setCity] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [lon, setLon] = useState<number>();
  const [lat, setLat] = useState<number>();
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState<string>("metric");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [results, setResults] = useState<WeatherDetails | null>(null);
  const [forecast, setForecast] = useState<Forecast[] | null>(null);
  const [placeholder, setPlaceholder] = useState<string>(
    "Search for weather updates by city"
  );

  const radios = [
    { name: "C", value: "metric" },
    { name: "F", value: "imperial" },
  ];
  const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCity(e.target.value);

    // if (results) {
    //   setLon(results.coord.lon);
    //   setLat(results.coord.lat);
    // }
  };
  const handleCountryChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCountry(e.target.value);
  };
  const handleClick = () => {
    getCurrentWeather(city);
    getFiveDayForecast(city);
    setPlaceholder("Try another location...");
    console.log(placeholder);
  };
  const changeUnit = (e: any) => {
    e.target.name !== "C" ? setUnits("imperial") : setUnits("metric");
  };

  const getCurrentWeather = async (query: string) => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const apiUrl = `${process.env.REACT_APP_SEARCH_ENDPOINT}?q=${city},${country}&units=${units}&appid=${apiKey}`;
    setIsLoading(true);
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
  const getFiveDayForecast = async (query: string) => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const apiForecast = `${process.env.REACT_APP_FIVEDAY_FORECAST}?q=${city}&appid=${apiKey}`;
    try {
      let response = await fetch(apiForecast);
      if (response.ok) {
        let res = await response.json();
        setForecast(res);
        console.log(forecast);
        console.log(apiForecast);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container className="searchbar_container">
        <Row>
          <InputGroup className="mb-3">
            <FormControl
              onChange={handleCityChange}
              placeholder={placeholder}
            />
            <FormControl onChange={handleCountryChange} placeholder="Country" />
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
        </Row>

        {results && forecast ? (
          <Weather data={results} isLoading={isLoading} forecast={forecast} />
        ) : (
          <Image src="logo.png" id="main_logo" />
        )}
      </Container>
    </>
  );
}

export default Search;
