import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import logo from "../../images/title-shape.png";
import image1 from "../../images/side-imag01.jpg";
import WorldArtItem from "./WorldArtItem";
import sanityClient from "../../client";

export default function WorldArt() {
  const [WorldArtData, setWorldArtData] = useState(null);
  const { ref: myRef, inView: isVisible } = useInView();
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "worldart"]{
           heading,
           description,
           icon{
             asset->{
               _id,
               url
             }
           }
        }`
      )
      .then((data) => setWorldArtData(data))
      .catch(console.error);
  }, []);
  return (
    <section
      className="content-section"
      data-background="#fffbf7"
      style={{ background: "rgb(255, 251, 247)" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="section-title text-center">
              <figure>
                <img src={logo} alt="Image" />
              </figure>
              <h2>
                The world's leading <br />
                museum of art
              </h2>
            </div>
          </div>
          <div className="col-lg-7">
            <figure
              ref={myRef}
              className={`image-box ${isVisible ? "is-reveal" : ""}`}
              data-scroll=""
              data-scroll-speed={-1}
            >
              <img src={image1} alt="Image" />
            </figure>
          </div>
          <div className="col-lg-5">
            <div className="side-icon-list right-side">
              <ul>
                {WorldArtData &&
                  WorldArtData.map((item, index) => (
                    <WorldArtItem
                      key={index}
                      img={item.icon.asset.url}
                      heading={item.heading}
                      description={item.description}
                    />
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
