import {
  Container,
  InputGroup,
  Button,
  FormControl,
  Form,
  Row,
} from "react-bootstrap";
import { useEffect, useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState({});
  const [hasError, setErrors] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const endpoint = process.env.API_URL;

  const fetchData = async () => {
    const resp = await fetch(endpoint + query);
    resp
      .json()
      .then((resp) => setJobs(resp))
      .then(console.log(jobs))
      .catch((err) => setErrors(err));
  };

  useEffect(() => {
    fetchData();
  }, [query]);

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
              onClick={handleSubmit && console.log("click")}
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
