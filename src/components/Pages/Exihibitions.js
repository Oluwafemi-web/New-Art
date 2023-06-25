import { useState, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

import sanityClient from "../../client";
import "../../css/bootstrap.min.css";
import "../../css/fancybox.min.css";
import "../../css/odometer.min.css";

import "../../css/style.css";

import data from "../../data";

// import UI components
import Header from "../UI/Header";
import Event from "../UI/Event";

export default function Exhibitions() {
  const [exhibitionData, setExhibitionData] = useState(null);
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
  if (!exhibitionData) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Header content={data.heading.exhibition} />
      <section className="content-section" data-background="#fffbf7">
        <div className="container">
          <div className="row justify-content-center">
            {exhibitionData.map((eventItem, index) => (
              <Event
                key={index}
                img={eventItem.image.asset.url}
                promo={eventItem.promo}
                title={eventItem.title}
                date={eventItem.date}
                icon={eventItem.icon.asset.url}
              />
            ))}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
    </>
  );
}
