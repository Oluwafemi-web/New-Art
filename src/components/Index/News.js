import logo from "../../images/title-shape.png";
import news1 from "../../images/recent-news01.jpg";
import news2 from "../../images/recent-news02.jpg";

export default function News() {
  return (
    <section className="content-section">
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
          <div className="col-12">
            <div className="recent-news">
              <div className="content-box">
                <small>Dec 26, 2020</small>
                <h3>The Ultimate Guide To Knots Practice Kit</h3>
                <p>
                  Learn to tie over 250 knots with step-by-step instructions.
                  Supplied with 4...
                </p>
                <a href="#" className="custom-link">
                  Continue reading
                </a>
              </div>
              {/* end content-box */}
              <figure data-scroll="" data-scroll-speed={-1}>
                <img src={news1} alt="Image" />
              </figure>
            </div>
            {/* end recent-news */}
          </div>
          {/* end col-8 */}
          <div className="col-12">
            <div className="recent-news">
              <div className="content-box">
                <small>Dec 26, 2020</small>
                <h3>The Ultimate Guide To Knots Practice Kit</h3>
                <p>
                  Learn to tie over 250 knots with step-by-step instructions.
                  Supplied with 4...
                </p>
                <a href="#" className="custom-link">
                  Continue reading
                </a>
              </div>
              {/* end content-box */}
              <figure data-scroll="" data-scroll-speed={1}>
                <img src={news2} alt="Image" />
              </figure>
            </div>
            {/* end recent-news */}
          </div>
          {/* end col-9 */}
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
