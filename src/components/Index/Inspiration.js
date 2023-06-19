import React, { useEffect, useRef } from "react";
import logo from "../../images/title-shape.png";
import image1 from "../../images/image01.jpg";
import image2 from "../../images/image02.jpg";
import image3 from "../../images/image03.jpg";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Inspiration() {
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
          <div className="col-lg-4 col-md-6">
            <div className="text-content" data-scroll="" data-scroll-speed={-1}>
              <h6>The challenge</h6>
              <p>
                In the 1980s, “the UK’s national museums faced political
                pressure from the <strong>Conservative</strong> government to
                charge for admission, to make them less dependent on government
                funding".
              </p>
            </div>
            {/* end text-content */}
          </div>
          {/* end col-4 */}
          <div className="col-lg-4 col-md-6">
            <div
              className="text-content"
              data-scroll=""
              data-scroll-speed="0.5"
            >
              <h6>The initiative</h6>
              <p>
                In 1997, the new Labour government made a commitment to
                reinstate free entry for <strong>national</strong> museums in
                order to have a more diverse range of visitors. “Following a
                campaign led by the museums themselves,
              </p>
            </div>
            {/* end text-content */}
          </div>
          {/* end col-4 */}
          <div className="col-lg-4 col-md-6">
            <div className="text-content" data-scroll="" data-scroll-speed={1}>
              <h6>The impact</h6>
              <p>
                The national museums which dropped charges all saw
                <strong>substantial</strong> increases to their visitor numbers,
                an average of 70 percent. In the first year after free admission
                was introduced visitor figures.
              </p>
            </div>
            {/* end text-content */}
          </div>
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
