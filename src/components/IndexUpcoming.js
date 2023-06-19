export default function IndexUpcoming() {
  return (
    <section className="content-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="section-title">
              <figure>
                <img src="images/title-shape.png" alt="Image" />
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
          <div className="col-lg-4 col-md-6">
            <div
              className="exhibition-box is-inview"
              data-scroll=""
              data-scroll-speed={-1}
              style={{
                transform:
                  "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -31.7812, 0, 1)",
              }}
            >
              <figure>
                <a href="#">
                  <img src="images/event01.jpg" alt="Image" className="img" />
                </a>
                <div className="info">
                  <figure className="i">
                    <img src="images/icon-info.png" alt="Image" />
                  </figure>
                  <span>50% off exhibitions</span>
                </div>
                {/* end info */}
              </figure>
              <div className="content-box">
                <h4>
                  <a href="#">Artemisia Gentileschi talk with Maria</a>
                </h4>
                <p>15 August – 31 October 2020</p>
              </div>
              {/* end content-box */}
            </div>
            {/* end exhibition-box */}
          </div>
          {/* end col-4 */}
          <div className="col-lg-4 col-md-6">
            <div
              className="exhibition-box is-inview"
              data-scroll=""
              data-scroll-speed={1}
              style={{
                transform:
                  "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 37.8813, 0, 1)",
              }}
            >
              <figure>
                <a href="#">
                  <img src="images/event02.jpg" alt="Image" className="img" />
                </a>
                <div className="info">
                  <figure className="i">
                    <img src="images/icon-info.png" alt="Image" />
                  </figure>
                  <span>50% off exhibitions</span>
                </div>
                {/* end info */}
              </figure>
              <div className="content-box">
                <h4>
                  <a href="#">Arctic culture and climate Exhibition</a>
                </h4>
                <p>22 Oct 2020 - 21 Feb 2023</p>
              </div>
              {/* end content-box */}
            </div>
            {/* end exhibition-box */}
          </div>
          {/* end col-4 */}
          <div className="col-lg-4 col-md-6">
            <div
              className="exhibition-box is-inview"
              data-scroll=""
              data-scroll-speed="-0.5"
              style={{
                transform:
                  "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -16.7906, 0, 1)",
              }}
            >
              <figure>
                <a href="#">
                  <img src="images/event03.jpg" alt="Image" className="img" />
                </a>
                <div className="info">
                  <figure className="i">
                    <img src="images/icon-info.png" alt="Image" />
                  </figure>
                  <span>50% off exhibitions</span>
                </div>
                {/* end info */}
              </figure>
              <div className="content-box">
                <h4>
                  <a href="#">Thomas Becket murder and the making of a saint</a>
                </h4>
                <p>22 Apr 2023 - 22 Aug 2023</p>
              </div>
              {/* end content-box */}
            </div>
            {/* end exhibition-box */}
          </div>
          {/* end col-4 */}
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
