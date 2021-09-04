import {
  Container,
  InputGroup,
  Button,
  FormControl,
  Form,
  Row,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import { fetchData } from "../Utils/utils";
import axios from "axios";

const SearchBar = () => {
  const [query, setQuery] = useState("web");
  const [jobs, setJobs] = useState([]);
  const [hasError, setErrors] = useState(false);
  const [loading, setLoading] = useState(false);

  const endpoint = process.env.API_URL;

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const fetchData = () => {
    fetch("https://remotive.io/api/remote-jobs?search=" + query)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Container className="container_searchbar">
        <Form className="pt-3" onSubmit={handleChange}>
          <InputGroup className="mb-3 searchbar">
            <FormControl
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button
              type="submit"
              onClick={console.log("click")}
              variant="secondary"
              id="search-btn"
            >
              Search
            </Button>
          </InputGroup>
        </Form>
      </Container>
    </>
  );
};

export default SearchBar;
