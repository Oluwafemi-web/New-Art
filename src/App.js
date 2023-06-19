import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./css/bootstrap.min.css";
import "./css/fancybox.min.css";
import "./css/odometer.min.css";
import Home from "./components/Index/Home";
import Footer from "./components/UI/Footer";
import NavBar from "./components/UI/navbar";
import "./css/style.css";
import MobileNav from "./components/UI/MobileNav";
import Carousel from "./components/carousel";

function App() {
  return (
    <BrowserRouter>
      {/* <Carousel /> */}
      <Routes>
        <Route element={<Home />} path="/" exact={true} />
        {/* <Route element={<Servizi />} path="/servizi" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Room />} path="/rooms" />
        <Route element={<SingleAttrazione />} path="/attrazione/:slug" />
        <Route element={<SingleIndexRoom />} path="/indexroom/:slug" />
        <Route element={<SingleRoom />} path="/rooms/:slug" />
        <Route element={<Attrazione />} path="/attrazione" /> */}
      </Routes>
      {/* <IndexNews /> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
