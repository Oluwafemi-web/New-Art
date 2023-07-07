import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useCallback } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

import { gsap } from "gsap";

import "locomotive-scroll/src/locomotive-scroll.scss";
gsap.registerPlugin(ScrollTrigger);

const useLocoScroll = (start) => {
  const startLocoScroll = useCallback(() => {
    if (!start) return;

    const scrollEl = document.querySelector(".smooth-scroll.page-loaded");
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

    const cleanup = () => {
      scroll.destroy();
    };

    return cleanup;
  }, [start]);

  useEffect(startLocoScroll, [startLocoScroll]);
};

export default useLocoScroll;
