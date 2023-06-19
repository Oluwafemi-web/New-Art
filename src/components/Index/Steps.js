import logo from "../../images/title-shape.png";

import image4 from "../../images/image04.jpg";
import image5 from "../../images/image05.jpg";
import image6 from "../../images/image06.jpg";
export default function Steps() {
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
          <div className="col-lg-4">
            <div
              className="image-icon-box"
              data-scroll=""
              data-scroll-speed={-1}
            >
              <figure className="icon">
                <img src={image4} alt="Image" />
              </figure>
              <figure className="content-image">
                <img src={image4} alt="Image" />
              </figure>
              <div className="content-box">
                <b>01.</b>
                <h4>Check What's Open</h4>
                <div className="expand">
                  <p>
                    Your safety is our first priority. Entry to the National
                    Maritime Museum is still free, but to help us ensure social
                    distancing.
                  </p>
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
          {/* end col-4 */}
          <div className="col-lg-4">
            <div
              className="image-icon-box"
              data-scroll=""
              data-scroll-speed="0.5"
            >
              <figure className="icon">
                <img src={image5} alt="Image" />
              </figure>
              <figure className="content-image">
                <img src={image5} alt="Image" />
              </figure>
              <div className="content-box">
                <b>02.</b>
                <h4>Booking Online</h4>
                <div className="expand">
                  <p>
                    Exhibition curator Venetia Porter presents this new
                    exhibition of works by artists from Iran to Morocco drawn
                    from the Museum collection.
                  </p>
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
          {/* end col-4 */}
          <div className="col-lg-4">
            <div
              className="image-icon-box"
              data-scroll=""
              data-scroll-speed={1}
            >
              <figure className="icon">
                <img src={image6} alt="Image" />
              </figure>
              <figure className="content-image">
                <img src={image6} alt="Image" />
              </figure>
              <div className="content-box">
                <b>03.</b>
                <h4>Keep Your Distance</h4>
                <div className="expand">
                  <p>
                    Take a look at our past exhibitions and enjoy the articles,
                    videos and photo galleries still available to view online.
                  </p>
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
          {/* end col-4 */}
        </div>
        {/* end row */}
      </div>
      {/* end container */}
    </section>
  );
}
