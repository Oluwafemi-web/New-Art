import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";
import "locomotive-scroll/src/locomotive-scroll.scss";
export default function useLocoScroll(start) {
  useEffect(() => {
    // if (!start) return;
    const scrollEl = document.querySelector(".page-loaded");
    const scroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 0.5,
      class: "is-reveal",
      //   dataScrollSpeed: 0.5,
      // Add more options as needed
    });

    return () => {
      scroll.destroy();
    };
  }, [start]);
}
