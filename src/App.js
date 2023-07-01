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
  const [preloader, setPreloader] = useState(true);
  const [timer, setTimer] = useState(3);

  useLocoScroll(!preloader);
  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };
  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, []);
  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);
  const clickeventHandler = () => {
    setNavOpen(!navOpen);
  };

  var active = "active";
  if (navOpen !== true) {
    active = "";
  }
  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true,
  //     multiplier: 0.5,
  //     // Add more options as needed
  //   });

  //   return () => {
  //     scroll.destroy();
  //   };
  // }, []);
  // // const scrollRef = useRef(null);

  return (
    <BrowserRouter>
      <div className="smooth-scroll page-loaded">
        <div className="section-wrapper" data-scroll-section>
          {navOpen && <MobileNav active={active} />}
          <NavBar clickeventHandler={clickeventHandler} active={active} />
          <Routes>
            <Route element={<Home />} path="/" exact={true} />
            <Route path="/visit" element={<Visit />} />
            <Route path="/exhibition" element={<Exihibitions />} />
            <Route path="/collection" element={<Collections />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/membership" element={<Register />} />
          </Routes>
          {/* <NewsLetter />  Gboy say Make I remove am */}
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
