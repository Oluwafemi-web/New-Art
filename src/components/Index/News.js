import { useState, useEffect } from "react";
import logo from "../../images/title-shape.png";
import sanityClient from "../../client";
import NewsItems from "./NewsItems";

export default function News(props) {
  const [newsData, setNewsData] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "indexnewsitems"]{
           title,
           date,
           description,
           image{
            asset->{
              _id,
              url
            }
          }
        }`
      )
      .then((data) => setNewsData(data))
      .catch(console.error);
  }, []);
  if (!newsData) {
    return;
  }
  return (
    <section className="content-section" data-scroll>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section-title text-center">
              <figure>
                <img src={logo} alt="Image" />
              </figure>
              <h6>Get Latest Updates and News</h6>
              <h2>Recent News</h2>
            </div>
            {/* end section-title */}
          </div>
          {/* end col-12 */}
        </div>
        {/* end row */}
      </div>
      {/* end container */}
      <div className="container">
        <div className="row">
          {newsData &&
            newsData.map((item, index) => (
              <NewsItems
                key={index}
                heading={item.title}
                date={item.date}
                description={item.description}
                img={item.image.asset.url}
              />
            ))}
          <div className="col-12 text-center">
            <a href="news.html" className="circle-button">
              SEE ALL
              <br />
              NEWS
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
