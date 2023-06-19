import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef } from "react";
import "../../css/bootstrap.min.css";

import "../../css/fancybox.min.css";
import "../../css/odometer.min.css";

import "../../css/style.css";
// import Carousel from "./components/carousel";
// import NavBar from "./components/navbar";
import WorldArt from "./WorldArt";
import IndexUpcoming from "./IndexUpcoming";
import Inspiration from "./Inspiration";
// import History from "./components/History";
import Steps from "./Steps";
import News from "./News";
import Member from "./Member";
import NewsLetter from "./NewsLetter";
import Footer from "../UI/Footer";

export default function Home() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      // Add more options as needed
    });

    return () => {
      scroll.destroy();
    };
  }, []);
  return (
    <div className="smooth-scroll" ref={scrollRef}>
      <div className="section-wrapper" data-scroll-section>
        {/* <NavBar /> */}
        {/* <Carousel /> */}
        <WorldArt />
        <IndexUpcoming />
        <Inspiration />
        <Steps />
        <Member />
        <News />
        <NewsLetter />
        <Footer />
        {/* <History /> */}
      </div>
    </div>
  );
}
