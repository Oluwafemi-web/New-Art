import logo from "./logo.svg";
import "./App.css";
import "./css/bootstrap.min.css";
import "./css/fancybox.min.css";
import "./css/odometer.min.css";

import "./css/style.css";
import Carousel from "./components/carousel";
import NavBar from "./components/navbar";
import WorldArt from "./components/WorldArt";
import IndexUpcoming from "./components/IndexUpcoming";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      {/* <Carousel /> */}
      <WorldArt />
      <IndexUpcoming />
    </>
  );
}

export default App;
