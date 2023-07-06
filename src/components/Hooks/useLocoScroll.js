import LocomotiveScroll from "locomotive-scroll";

import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

import { gsap } from "gsap";

// import "locomotive-scroll/src/locomotive-scroll.scss";
gsap.registerPlugin(ScrollTrigger);

export default function useLocoScroll(start) {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Code to execute after the specified time
      if (!start) return;
      // const scrollEl = document.querySelector(".smooth-scroll.page-loaded");
      const scrollEl = document.querySelector("#root");

      const scroll = new LocomotiveScroll({
        el: scrollEl,
        smooth: true,
        repeat: true,
        multiplier: 1,
        scrollbarContainer: false,
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
    }, 2000); // Time in milliseconds (e.g., 3000ms = 3 seconds)

    return () => {
      clearTimeout(timer); // Clear the timeout if the component unmounts before the specified time
    };
  }, [start]);
}
