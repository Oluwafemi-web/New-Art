import { useState, useEffect } from "react";
import logo from "../../images/title-shape.png";
import Event from "../UI/Event";
import sanityClient from "../../client";

export default function IndexUpcoming() {
  const [upcomingData, setUpcomingData] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "upcoming"]{
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
      .then((data) => setUpcomingData(data))
      .catch(console.error);
  }, []);

  return (
    <section className="content-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="section-title">
              <figure>
                <img src={logo} alt="Image" />
              </figure>
              <h6>DON’T MISS THE OPPORTUNITY</h6>
              <h2>Upcoming Events</h2>
            </div>
          </div>
          <div className="col-lg-3">
            <a href="#" className="circle-button">
              BOOK AN <br />
              EVENT
            </a>
          </div>
        </div>

        <div className="row justify-content-center">
          {upcomingData &&
            upcomingData.map((item, index) => {
              // Calculate the current data-scroll value
              // let currentDataScroll = previousDataScroll;
              // if (previousDataScroll === 1) {
              //   currentDataScroll = -0.5;
              // } else if (previousDataScroll === -0.5) {
              //   currentDataScroll = -1;
              // } else {
              //   currentDataScroll = 1; // Reset the pattern
              // }

              // // Update the previousDataScroll for the next iteration
              // previousDataScroll = currentDataScroll;

              return (
                <Event
                  key={index}
                  icon={item.icon.asset.url}
                  img={item.image.asset.url}
                  promo={item.promo}
                  title={item.title}
                  date={item.date}
                />
              );
            })}
          <div className="col-12 text-center">
            <a href="#" className="custom-button">
              VIEW ALL UPCOMING EVENTS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
