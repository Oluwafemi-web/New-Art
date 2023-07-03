import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./css/bootstrap.min.css";
import "./css/fancybox.min.css";
import "./css/odometer.min.css";

import "./css/style.css";

// Import UI Elements

import Footer from "./components/UI/Footer";
import NavBar from "./components/UI/navbar";
import NewsLetter from "./components/Index/NewsLetter";
import MobileNav from "./components/UI/MobileNav";
import Preloader from "./components/UI/Preloader";

// import Carousel from "./components/carousel";

// Import Page Elements
import Home from "./components/Pages/Home";
import Visit from "./components/Pages/Visit";
import Exihibitions from "./components/Pages/Exihibitions";
import Collections from "./components/Pages/Collections";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Register from "./components/Pages/Register";
import sanityClient from "./client";
import useLocoScroll from "./components/Hooks/useLocoScroll";

function App() {
  const [navOpen, setNavOpen] = useState(false);
  // const [preloader, setPreloader] = useState(true);
  const [isSanityLoaded, setIsSanityLoaded] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);

  // useLocoScroll(!preloader);
  // const id = useRef(null);

  const handleSanityLoaded = () => {
    setIsSanityLoaded(true);
  };

  useLocoScroll(isSanityLoaded); // Call the useLocoScroll hook with isSanityLoaded as the argument

  const clickeventHandler = () => {
    setNavOpen(!navOpen);
  };

  var active = "active";
  if (navOpen !== true) {
    active = "";
  }

  return (

    <BrowserRouter>
      {console.log(!isSanityLoaded)}

      {!isSanityLoaded ? ( // Conditionally render the Preloader
        <Preloader />
      ) : (
        <div className="smooth-scroll page-loaded">
          <div className="section-wrapper" data-scroll-section>
          {navOpen && <MobileNav active={active} />}
          <NavBar clickeventHandler={clickeventHandler} active={active} />
            <Routes>
              <Route
                path="/"
                element={<Home onSanityLoaded={handleSanityLoaded} />}
                exact
              />
              <Route
                path="/visit"
                element={<Visit onSanityLoaded={handleSanityLoaded} />}
              />
              <Route
                path="/exhibition"
                element={<Exihibitions onSanityLoaded={handleSanityLoaded} />}
              />
              <Route
                path="/collection"
                element={<Collections onSanityLoaded={handleSanityLoaded} />}
              />
              <Route
                path="/about"
                element={<About onSanityLoaded={handleSanityLoaded} />}
              />
              <Route
                path="/contact"
                element={<Contact onSanityLoaded={handleSanityLoaded} />}
              />
              <Route
                path="/membership"
                element={<Register onSanityLoaded={handleSanityLoaded} />}
              />
            </Routes>
            <Footer />
          </div>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
