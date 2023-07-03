import { useState, useEffect, useContext } from "react";
import SanityContext from "../Context/sanity-context";

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

  const handleSanityLoaded = () => {
    sanityCtx.changeState(true);
  };

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "exhibition"]{
           title,
           date,
           promo,
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
        }`
      )
      .then((data) => setExhibitionData(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "exhibitionheader"]{
           title,
           description,
           image{
            asset->{
              _id,
              url
            }
          }
        }`
      )
      .then((data) => setExhibitionHeader(data))
      .catch(console.error);
  }, []);
  if (!exhibitionData || !exhibitionHeader) {
    return sanityCtx.changeState(false);
  } else {
    handleSanityLoaded();
  }

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
            {exhibitionData.map((eventItem, index) => {
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
                  img={eventItem.image.asset.url}
                  promo={eventItem.promo}
                  title={eventItem.title}
                  date={eventItem.date}
                  icon={eventItem.icon.asset.url}
                  dataScroll={currentDataScroll}
                />
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
