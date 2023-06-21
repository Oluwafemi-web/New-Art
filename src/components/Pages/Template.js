// import LocomotiveScroll from "locomotive-scroll";
// import { useEffect, useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "../../css/bootstrap.min.css";

import "../../css/fancybox.min.css";
import "../../css/odometer.min.css";

import "../../css/style.css";

// Import Page Elements
import Visit from "./Visit";
import Exihibitions from "./Exihibitions";
import Collections from "./Collections";
import About from "./About";
import Contact from "./Contact";


import NewsLetter from "../Index/NewsLetter";
import Footer from "../UI/Footer";
import Header from "../UI/Header";
import NavBar from "../UI/navbar";

export default function Template() {
  // const scrollRef = useRef(null);

  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true,
  //     // Add more options as needed
  //   });

  //   return () => {
  //     scroll.destroy();
  //   };
  // }, []);
  return (
    <BrowserRouter>
      {/* <div className="smooth-scroll page-loaded" ref={scrollRef}>
        <div className="section-wrapper" data-scroll-section> */}
        <>
          <NavBar />
          <Header />
          <Routes>
            <Route path='/visit' element={<Visit />} />
            <Route path='/exihibition' element={<Exihibitions />} />
            <Route path='/collection' element={<Collections />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <NewsLetter />
          <Footer />
        </>
        {/* </div>
      </div> */}
    </BrowserRouter>
  );
}

//  Template();