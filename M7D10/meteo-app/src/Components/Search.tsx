import React from "react";
import { useState, ChangeEvent } from "react";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Image,
} from "react-bootstrap";
import { WeatherSearch } from "../Types/interface";
import Weather from "./Weather";

function Search() {
  const [query, setQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [results, setResults] = useState<WeatherSearch[] | null>(null);
  const [placeholder, setPlaceholder] = useState<string>(
    "Search for weather updates by city"
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setQuery(e.target.value);
  };
  const handleClick = () => {
    getCurrentWeather(query);
    setPlaceholder("Try another location...");
    console.log(placeholder);
  };

  const getCurrentWeather = async (query: string) => {
    // const api = process.env.REACT_APP_API_KEY;
    setIsLoading(true);
    try {
      let response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );
      if (response.ok) {
        let res = await response.json();
        console.log(res);
        setResults(res);
        setIsLoading(false);
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
        </InputGroup>
        {results ? (
          <Weather weather={results} isLoading={isLoading} />
        ) : (
          <Image src="logo.png"></Image>
        )}
      </Container>
    </>
  );
}

export default Search;
