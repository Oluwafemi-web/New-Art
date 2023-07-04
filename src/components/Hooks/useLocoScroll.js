import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

import { gsap } from "gsap";

import "locomotive-scroll/src/locomotive-scroll.scss";
gsap.registerPlugin(ScrollTrigger);

export default function useLocoScroll(start) {
  useEffect(() => {
    if (!start) return;
    const scrollEl = document.querySelector(".page-loaded");
    const scroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 0.5,
      class: "is-reveal",
      //   dataScrollSpeed: 0.5,
      // Add more options as needed
    });
    console.log("started");

    gsap.to(".horizontal-scroll", {
      x: "-=500", // Continuous horizontal scrolling
      scrollTrigger: {
        trigger: ".horizontal-scroll",
        start: "top center",
        end: "bottom center",
        scrub: true,
        repeat: -1, // Repeat the animation indefinitely
        onRepeat: (self) => self.invalidate(), // Invalidate the animation on each repeat
      },
    });

    return () => {
      scroll.destroy();
    };
  }, [start]);
}
