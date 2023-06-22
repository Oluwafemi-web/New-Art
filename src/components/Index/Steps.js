import logo from "../../images/title-shape.png";
import { useState, useEffect } from "react";
import sanityClient from "../../client";
export default function Steps() {
  const [stepsData, setStepsData] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "steps"]{
           index,
           title,
           description,
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
      .then((data) => setStepsData(data))
      .catch(console.error);
  }, []);
  if (!stepsData || stepsData.length === 0) {
    return <div>Loading...</div>;
  }
  console.log(stepsData);
  return (
    <section className="content-section no-bottom-spacing">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section-title text-center">
              <figure>
                <img src={logo} alt="Image" />
              </figure>
              <h6>Visit the National Wandau Museum</h6>
              <h2>3 steps to be safe</h2>
            </div>
            {/* end section-title */}
          </div>
          {/* end col-12 */}
        </div>
        {/* end row */}
      </div>
      {/* end container */}
      <div className="container-fluid px-0">
        <div className="row g-0">
          {stepsData.map((item, index) => (
            <div className="col-lg-4" key={index}>
              <div
                className="image-icon-box"
                data-scroll=""
                data-scroll-speed={-1}
              >
                <figure className="icon">
                  <img src={item.icon.asset.url} alt="Image" />
                </figure>
                <figure className="content-image">
                  <img src={item.image.asset.url} alt="Image" />
                </figure>
                <div className="content-box">
                  <b>{item.index}</b>
                  <h4>{item.title}</h4>
                  <div className="expand">
                    <p>{item.description}</p>
                    <a href="#" className="custom-link">
                      Learn More
                    </a>
                  </div>
                  {/* end expand */}
                </div>
                {/* end content-box */}
              </div>
              {/* end image-icon-box */}
            </div>
          ))}
          {/* end col-4 */}
        </div>
        {/* end row */}
      </div>
      {/* end container */}
    </section>
  );
}
