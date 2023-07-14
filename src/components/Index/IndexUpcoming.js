import { useState, useEffect } from "react";
import logo from "../../images/title-shape.png";
import Event from "../UI/Event";
import sanityClient from "../../client";

export default function IndexUpcoming(props) {
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
                <img src={props.logo} alt="Image" />
              </figure>
              <h6>{props.subheading}</h6>
              <h2>{props.heading}</h2>
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
