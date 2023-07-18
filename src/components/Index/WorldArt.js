import { useState, useEffect, useContext } from "react";
import { useInView } from "react-intersection-observer";
import LanguageContext from "../Context/language-context";
import { PortableText } from "@portabletext/react";
import WorldArtItem from "./WorldArtItem";
import sanityClient from "../../client";

export default function WorldArt(props) {
  const [WorldArtData, setWorldArtData] = useState(null);
  const [WorldArtImage, setWorldArtImage] = useState(null);
  const { ref: myRef, inView: isVisible } = useInView();
  const ctx = useContext(LanguageContext);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "worldart" && language == $language]{
           heading,
           description,
           icon{
             asset->{
               _id,
               url
             }
           },
           _translations[] {
            value->{
              heading,
              description,
              icon{
                asset->{
                  _id,
                  url
                }
              }
            }
         }
        }`,
        {
          language: ctx.languageData,
        }
      )
      .then((data) => setWorldArtData(data))
      .catch(console.error);

    sanityClient
      .fetch(
        `*[_type == "worldartimage"]{
           image{
             asset->{
               _id,
               url
             }
           },
           
        }`
      )
      .then((data) => setWorldArtImage(data[0]))
      .catch(console.error);
  }, [ctx.languageData]);
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
              {/* <figure>
                <img src={props.logo} alt="Image" />
              </figure> */}
              <PortableText value={props.heading} />
            </div>
          </div>
          <div className="col-lg-7">
            <figure
              ref={myRef}
              className={`image-box ${isVisible ? "is-reveal" : ""}`}
              data-scroll=""
              data-scroll-speed={-1}
            >
              {WorldArtImage && (
                <img src={WorldArtImage.image.asset.url} alt="Image" />
              )}
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
