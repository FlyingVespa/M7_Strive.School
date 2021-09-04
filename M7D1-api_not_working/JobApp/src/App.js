import NavbarTop from "./Components/NavbarTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import SearchBar from "./Components/SearchBar";
import Footer from "./Components/Footer";
import JobList from "./Components/JobList";

function App() {
  return (
    <div className="App">
      <NavbarTop />
      <SearchBar />

      <BrowserRouter>
        <Route component={JobList}></Route>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
