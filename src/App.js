import { useEffect, useRef, useState, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./css/bootstrap.min.css";
import "./css/fancybox.min.css";
import "./css/odometer.min.css";

import "./css/style.css";

// Import UI Elements

import Footer from "./components/UI/Footer";
import NavBar from "./components/UI/navbar";
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
import SanityProvider from "./components/Context/SanityProvider";
import SanityContext from "./components/Context/sanity-context";

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [preloader, setPreloader] = useState(true);
  // const [isSanityLoaded, setIsSanityLoaded] = useState(false);
  const sanityCtx = useContext(SanityContext);
  console.log(sanityCtx);
  // const [isLoading, setIsLoading] = useState(true);

  // useLocoScroll(!preloader);
  // const id = useRef(null);

  // const handleSanityLoaded = () => {
  // if (sanityCtx.dataLoaded) setPreloader(false);
  // };

  useLocoScroll(sanityCtx.dataLoaded); // Call the useLocoScroll hook with isSanityLoaded as the argument
  // if (sanityCtx.dataLoaded) setPreloader(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setPreloader(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  const clickeventHandler = () => {
    setNavOpen(!navOpen);
  };
  const linkEventHandler()

  var active = "active";
  if (navOpen !== true) {
    active = "";
  }

  return (
    <BrowserRouter>
      {preloader ? ( // Conditionally render the Preloader
        <Preloader />
      ) : (
        <div className="smooth-scroll page-loaded">
          <div className="section-wrapper" data-scroll-section>
            {navOpen && <MobileNav active={active} />}
            <NavBar clickeventHandler={clickeventHandler} active={active} />
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/visit" element={<Visit />} />
              <Route path="/exhibition" element={<Exihibitions />} />
              <Route path="/collection" element={<Collections />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/membership" element={<Register />} />
            </Routes>
            <Footer />
          </div>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
