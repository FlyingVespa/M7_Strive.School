import "./App.css";
import MyNav from "./Components/MyNav";
import Search from "./Components/Search";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Search />
      <Footer />
    </div>
  );
}

export default App;
