import logo from "../../images/title-shape.png";
import icon1 from "../../images/icon01.png";
import icon2 from "../../images/icon02.png";
import icon3 from "../../images/icon03.png";
import image1 from "../../images/side-imag01.jpg";

export default function WorldArt() {
  return (
    <section
      className="content-section"
      data-background="#fffbf7"
      style={{ background: "rgb(255, 251, 247)" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="section-title text-center">
              <figure>
                <img src={logo} alt="Image" />
              </figure>
              <h2>
                The world's leading <br />
                museum of art
              </h2>
            </div>
            {/* end section-title */}
          </div>
          {/* end col-12 */}
          <div className="col-lg-7">
            <figure
              className="image-box is-inview"
              data-scroll=""
              data-scroll-speed={-1}
              style={{
                transform:
                  "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -58.65, 0, 1)",
              }}
            >
              <img src={image1} alt="Image" />
            </figure>
          </div>
          {/* end col-7 */}
          <div className="col-lg-5">
            <div className="side-icon-list right-side">
              <ul>
                <li>
                  <figure>
                    <img src={icon1} alt="Image" />
                  </figure>
                  <div className="content">
                    <h5>Opening times</h5>
                    <p>
                      From 27 August
                      <br />
                      Thursday – Sunday: 11.00-19.00
                    </p>
                  </div>
                  {/* end content */}
                </li>
                <li>
                  <figure>
                    <img src={icon2} alt="Image" />
                  </figure>
                  <div className="content">
                    <h5>Book Online</h5>
                    <p>
                      Some exhibitions and events carry <br />a separate charge
                    </p>
                    <a href="#">Join Now and Book Online</a>
                  </div>
                  {/* end content */}
                </li>
                <li>
                  <figure>
                    <img src={icon3} alt="Image" />
                  </figure>
                  <div className="content">
                    <h5>Where You Visit</h5>
                    <p>
                      Cromwell New Street Road
                      <br />
                      London, SW7 2RL
                    </p>
                  </div>
                  {/* end content */}
                </li>
              </ul>
            </div>
            {/* end side-icon-list */}
          </div>
          {/* end col-5 */}
        </div>
        {/* end row */}
      </div>
      {/* end container */}
    </section>
  );
}
