import { useState, useEffect, useContext } from "react";
import { SlideshowLightbox } from "lightbox.js-react";

import "lightbox.js-react/dist/index.css";
import SanityContext from "../Context/sanity-context";
import LanguageContext from "../Context/language-context";

import sanityClient from "../../client";
import "../../css/bootstrap.min.css";
import "../../css/fancybox.min.css";
import "../../css/odometer.min.css";

import "../../css/style.css";

// import UI components
import Header from "../UI/Header";
import Event from "../UI/Event";

export default function Exhibitions() {
  const [exhibitionData, setExhibitionData] = useState(null);
  const [exhibitionHeader, setExhibitionHeader] = useState(null);
  const sanityCtx = useContext(SanityContext);
  const ctx = useContext(LanguageContext);

  const handleSanityLoaded = () => {
    sanityCtx.changeState(true);
  };

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "exhibition" && language == $language] | order(dateTime(_createdAt)){
           title,
           date,
           _createdAt,
           image{
            asset->{
              _id,
              url
            }
          },
          _translations[] {
            value->{
              title,
           date,
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
      .then((data) => setExhibitionData(data))
      .catch(console.error);

    sanityClient
      .fetch(
        `*[_type == "exhibitionheader" && language == $language]{
           title,
           description,
           image{
            asset->{
              _id,
              url
            }
          },
          _translations[] {
            value->{
              title,
           description,
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
      .then((data) => setExhibitionHeader(data))
      .catch(console.error);
  }, [ctx.languageData]);

  useEffect(() => {
    if (!exhibitionData || !exhibitionHeader) {
      return sanityCtx.changeState(false);
    } else {
      handleSanityLoaded();
    }
  }, [exhibitionData]);
  if (!exhibitionData) return;
  let previousDataScroll = 1; // Initial value for the first component
  return (
    <>
      {exhibitionHeader &&
        exhibitionHeader.map((item, index) => (
          <Header
            title={item.title}
            description={item.description}
            background={item.image.asset.url}
            key={index}
          />
        ))}
      <section className="content-section" data-background="#fffbf7">
        <div className="container">
          <div className="row justify-content-center">
            <SlideshowLightbox className="grid-fr">
              {exhibitionData &&
                exhibitionData.map((eventItem, index) => (
                  <img
                    key={index}
                    src={eventItem.image.asset.url}
                    alt=""
                    data-scroll
                  />
                ))}
            </SlideshowLightbox>
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
    </>
  );
}
