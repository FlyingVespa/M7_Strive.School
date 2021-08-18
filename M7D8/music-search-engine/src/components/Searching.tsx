import "../styles/style.css";

import AllList from "./AllList";

import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Image,
} from "react-bootstrap";
import { ChangeEvent, useState } from "react";
import { Result } from "../types/interfaces";

function Searching() {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Result[]>([]);
  const [placeholder, setPlaceholder] = useState<string>("Set your music here");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setQuery(e.target.value);
  };
  const handleClick = () => {
    getMusic(query);
    setPlaceholder("try again");
    console.log(placeholder);
  };

  const getMusic = async (query: string) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`
      );
      let res = await response.json();
      let resp = res.data;

      setResults(resp);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container className="container_searchbar">
        <InputGroup className="mb-3 searchbar">
          <FormControl placeholder={placeholder} onChange={handleChange} />
          <Button onClick={handleClick} variant="secondary" id="search-btn">
            Search
          </Button>
        </InputGroup>
        {!results ? (
          <Image src="gorilla.png" id="gorilla" />
        ) : (
          <AllList songs={results} />
        )}
      </Container>
    </>
  );
}

export default Searching;
