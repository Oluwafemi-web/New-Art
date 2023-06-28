import React, { useEffect, useRef, useState } from "react";
import logo from "../../images/title-shape.png";
import image1 from "../../images/image01.jpg";
import image2 from "../../images/image02.jpg";
import image3 from "../../images/image03.jpg";
import { gsap } from "gsap";
import InspirationItems from "./InspirationItems";
import ScrollTrigger from "gsap/ScrollTrigger";
import sanityClient from "../../client";
gsap.registerPlugin(ScrollTrigger);

export default function Inspiration() {
  const [inspirationData, setInspirationData] = useState(null);
  const scrollRef = useRef(null);
  useEffect(() => {
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
  }, []);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "inspirationitems"]{
           title,
           description
        }`
      )
      .then((data) => setInspirationData(data))
      .catch(console.error);
  }, []);
  if (!inspirationData) {
    return;
  }

  return (
    <section
      className="content-section no-bottom-spacing bottom-white"
      data-background="#fffbf7"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section-title text-center">
              <figure>
                <img src={logo} alt="Image" />
              </figure>
              <h2>
                Art Inspiration of <br />
                19th Century
              </h2>
            </div>
            {/* end section-title */}
          </div>
          {/* end col-12 */}
          {inspirationData &&
            inspirationData.map((item, index) => (
              <InspirationItems
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}

          {/* end col-4 */}
        </div>
        {/* end row */}
      </div>
      {/* end container */}
      <div className="clearfix spacing-100" />
      <div className="horizontal-scroll">
        <div
          className="scroll-inner"
          data-scroll=""
          data-scroll-direction="horizontal"
          data-scroll-speed={5}
        >
          <div className="scroll-wrapper">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-3">
                  <figure
                    className="image-box"
                    data-scroll=""
                    data-scroll-speed={0}
                  >
                    <img src={image1} alt="Image" />
                  </figure>
                </div>
                {/* end col-3 */}
                <div className="col-md-4 offset-md-1">
                  <figure
                    className="image-box"
                    data-scroll=""
                    data-scroll-speed={0}
                  >
                    <img src={image2} alt="Image" />
                  </figure>
                </div>
                {/* end col-3 */}
                <div className="col-md-2 offset-md-1">
                  <figure
                    className="image-box"
                    data-scroll=""
                    data-scroll-speed={0}
                  >
                    <img src={image3} alt="Image" />
                  </figure>
                </div>
                {/* end col-3 */}
              </div>
              {/* end row */}
            </div>
            {/* end container-fluid */}
          </div>
          {/* end scroll-wrapper */}
          <div className="scroll-wrapper">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-3">
                  <figure
                    className="image-box"
                    data-scroll=""
                    data-scroll-speed={0}
                  >
                    <img src={image1} alt="Image" />
                  </figure>
                </div>
                {/* end col-3 */}
                <div className="col-md-4 offset-md-1">
                  <figure
                    className="image-box"
                    data-scroll=""
                    data-scroll-speed={0}
                  >
                    <img src={image2} alt="Image" />
                  </figure>
                </div>
                {/* end col-3 */}
                <div className="col-md-2 offset-md-1">
                  <figure
                    className="image-box"
                    data-scroll=""
                    data-scroll-speed={0}
                  >
                    <img src={image3} alt="Image" />
                  </figure>
                </div>
                {/* end col-3 */}
              </div>
              {/* end row */}
            </div>
            {/* container-fluid */}
          </div>
          {/* end scroll-wrapper */}
        </div>
        {/* end scroll-inner */}
      </div>
      {/* end horizontal-scroll */}
    </section>
  );
}
