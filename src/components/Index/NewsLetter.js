import newsletter from "../../images/newsletter-image.png";

export default function NewsLetter() {
  return (
    <section
      className="content-section no-spacing"
      data-background="#94ffc4"
      style={{ background: "rgb(148, 255, 196)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="newsletter-box">
              <div className="form">
                <div className="titles">
                  <h6>Subscribe Newsletter</h6>
                  <h2>Sign up to get the latest news</h2>
                </div>
                {/* end titles */}
                <div className="inner">
                  <input type="email" placeholder="Enter your e-mail address" />
                  <input type="submit" defaultValue="SIGN UP" />
                </div>
                {/* end inner */}
                <small>
                  Will be used in accordance with our
                  <a href="#">Privacy Policy</a>
                </small>
              </div>
              {/* end form */}
              <figure
                className="newsletter-image"
                data-scroll=""
                data-scroll-speed="0.7"
              >
                <img src={newsletter} alt="Image" />
              </figure>
            </div>
            {/* end newsletter-box */}
          </div>
          {/* end col-12 */}
        </div>
        {/* end row */}
      </div>
      {/* end container */}
    </section>
  );
}
