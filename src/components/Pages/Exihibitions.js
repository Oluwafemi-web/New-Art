import { useState, useEffect, useContext } from "react";
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
        `*[_type == "exhibition" && language == $language]{
           title,
           date,
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
            {exhibitionData &&
              exhibitionData.map((eventItem, index) => {
                // Calculate the current data-scroll value
                let currentDataScroll = previousDataScroll;
                if (previousDataScroll === 1) {
                  currentDataScroll = -0.5;
                } else if (previousDataScroll === -0.5) {
                  currentDataScroll = -1;
                } else {
                  currentDataScroll = 1; // Reset the pattern
                }

                // Update the previousDataScroll for the next iteration
                previousDataScroll = currentDataScroll;

                return (
                  <Event
                    key={index}
                    index={index}
                    img={eventItem.image.asset.url}
                    title={eventItem.title}
                    date={eventItem.date}
                    dataScroll={currentDataScroll}
                  >
                    {" "}
                  </Event>
                );
              })}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
    </>
  );
}
