import { useState, useEffect, useContext } from "react";
import LanguageContext from "../Context/language-context";
import Event from "../UI/Event";
import sanityClient from "../../client";

export default function IndexUpcoming(props) {
  const [upcomingData, setUpcomingData] = useState(null);
  const ctx = useContext(LanguageContext);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "upcoming" && language == $language]{
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
      .then((data) => setUpcomingData(data))
      .catch(console.error);
  }, [ctx.languageData]);

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
        </div>

        <div className="row justify-content-center">
          {upcomingData &&
            upcomingData.map((item, index) => {
              return (
                <Event
                  key={index}
                  img={item.image.asset.url}
                  title={item.title}
                  date={item.date}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
}
