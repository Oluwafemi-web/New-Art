// import LocomotiveScroll from "locomotive-scroll";
// import { useEffect, useRef } from "react";
import "../../css/bootstrap.min.css";

import "../../css/fancybox.min.css";
import "../../css/odometer.min.css";

import "../../css/style.css";
import Carousel from "../carousel";
// import NavBar from "./components/navbar";
import WorldArt from "../Index/WorldArt";
import IndexUpcoming from "../Index/IndexUpcoming";
import Inspiration from "../Index/Inspiration";
// import History from "./components/History";
import Steps from "../Index/Steps";
import News from "../Index/News";
import Member from "../Index/Member";

export default function Home() {

  return (

      <>
        <Carousel />
        <WorldArt />
        <IndexUpcoming />
        <Inspiration />
        <Steps />
        <Member />
        <News />
      </>
  );
}
