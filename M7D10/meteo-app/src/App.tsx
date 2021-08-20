import "./App.css";
import MyNav from "./Components/MyNav";
import Search from "./Components/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Components/Weather";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Search />
      <Weather />
    </div>
  );
}

export default App;
