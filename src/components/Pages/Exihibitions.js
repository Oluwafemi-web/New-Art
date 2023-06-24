import "../../css/bootstrap.min.css";
import "../../css/fancybox.min.css";
import "../../css/odometer.min.css";

import "../../css/style.css";

import data from "../../data";

// import UI components
import Header from "../UI/Header";
import Event from "../UI/Event";

export default function Exhibitions() {
  return (
    <>
      <Header content={data.heading.exhibition} />
      <section className="content-section" data-background="#fffbf7">
        <div className="container">
          <div className="row justify-content-center">
            {data.event.map((eventItem) => (
              <Event
                key={eventItem.img}
                img={eventItem.img}
                promo={eventItem.promo}
                title={eventItem.h4}
                date={eventItem.p}
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
