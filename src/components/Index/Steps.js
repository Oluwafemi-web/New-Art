import { useState, useEffect, useContext } from "react";
import { PortableText } from "@portabletext/react";
import LanguageContext from "../Context/language-context";

import sanityClient from "../../client";
export default function Steps(props) {
  const [stepsData, setStepsData] = useState(null);
  const ctx = useContext(LanguageContext);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "steps" && language == $language]{
           index,
           title,
           description,
           icon{
            asset->{
              _id,
              url
            }
           },
           image{
             asset->{
               _id,
               url
             }
           },
           _translations[] {
            value->{
              index,
           title,
           description,
           icon{
            asset->{
              _id,
              url
            }
           },
           image{
             asset->{
               _id,
               url
             }
           }
            }
         }
        }`,
        { language: ctx.languageData }
      )
      .then((data) => setStepsData(data))
      .catch(console.error);
  }, [ctx.languageData]);
  if (!stepsData || stepsData.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <section className="content-section no-bottom-spacing">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section-title text-center">
              {/* <figure>
                <img src={props.logo} alt="Image" />
              </figure> */}
              <h6>{props.subheading}</h6>
              <h2>{props.heading}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid px-0">
        <div className="row g-0">
          {stepsData.map((item, index) => (
            <div className="col-lg-4" key={index}>
              <div
                className="image-icon-box"
                data-scroll=""
                data-scroll-speed={-1}
              >
                <figure className="content-image">
                  <img src={item.image.asset.url} alt="Image" />
                </figure>
                <div className="content-box">
                  <b>{item.index}</b>
                  <h4>{item.title}</h4>
                  <div className="expand">
                    <PortableText value={item.description} />

                    <a href="#" className="custom-link">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
