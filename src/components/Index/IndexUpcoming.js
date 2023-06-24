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
            {/* end section-title */}
          </div>
          {/* end col-9 */}
          <div className="col-lg-3">
            <a href="#" className="circle-button">
              BOOK AN <br />
              EVENT
            </a>
          </div>
          {/* end col-3 */}
        </div>
        {/* end row */}
        <div className="row justify-content-center">
          {upcomingData &&
            upcomingData.map((item, index) => (
              <Event
                key={index}
                icon={item.icon.asset.url}
                img={item.image.asset.url}
                promo={item.promo}
                title={item.title}
                date={item.date}
              />
            ))}
          <div className="col-12 text-center">
            <a href="#" className="custom-button">
              VIEW ALL UPCOMING EVENTS
            </a>
          </div>

          {/* end col-12 */}
        </div>
        {/* end row */}
      </div>
      {/* end container */}
    </section>
  );
}
