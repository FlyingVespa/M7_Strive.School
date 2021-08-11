// npm packagers
import { BrowserRouter, Route } from "react-router-dom";

// Styling
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Components
import NavbarTop from "./components/Navigation/NavbarTop";
import SearchBar from "./components/SearchBar";
import CompanyDetailPage from "./components/CompanyPage/CompanyDetailPage";
import JobList from "./components/JobPage/JobList";
import SingleJob from "./components/JobPage/SingleJob";

function App() {
  return (
    <>
      <NavbarTop />
      <SearchBar />
      <SingleJob />
      <BrowserRouter>
        <Route path="/jobs" component={JobList} />
        <Route path="/company-details" component={CompanyDetailPage} />
      </BrowserRouter>
    </>
  );
}

export default App;
