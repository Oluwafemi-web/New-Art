import slide from "../../images/art-slide01.jpg";
import slide2 from "../../images/art-slide02.jpg";
import slide3 from "../../images/art-slide03.jpg";
import slide4 from "../../images/art-slide04.jpg";
import slide5 from "../../images/art-slide05.jpg";

export default function History() {
  return (
    <section className="content-section">
      <div className="container">
        <div className="row g-0 align-items-center">
          <div className="col-lg-6">
            <div className="art-slider">
              <div className="titles">
                <h6>Art Collection</h6>
                <h2>
                  History of <br />
                  Barnes
                </h2>
              </div>
              {/* end titles */}
              <div className="swiper-container art-slider-content">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <span>01</span>
                    <h3>
                      Venus <br />
                      de Milo
                    </h3>
                  </div>
                  {/* end swiper-slide */}
                  <div className="swiper-slide">
                    <span>02</span>
                    <h3>
                      Les Demoiselles <br />
                      d'Avignon
                    </h3>
                  </div>
                  {/* end swiper-slide */}
                  <div className="swiper-slide">
                    <span>03</span>
                    <h3>
                      Mona <br />
                      Lisa
                    </h3>
                  </div>
                  {/* end swiper-slide */}
                  <div className="swiper-slide">
                    <span>04</span>
                    <h3>
                      L'Arlesienne: <br />
                      Madame Ginoux
                    </h3>
                  </div>
                  {/* end swiper-slide */}
                  <div className="swiper-slide">
                    <span>05</span>
                    <h3>
                      Cuckoo <br />
                      Clocks
                    </h3>
                  </div>
                  {/* end swiper-slide */}
                </div>
                {/* end swiper-wrapper */}
              </div>
              {/* end art-slider-content */}
            </div>
            {/* end art-slider */}
          </div>
          {/* end col-6 */}
          <div className="col-lg-6">
            <div className="art-slider" data-scroll="" data-scroll-speed={1}>
              <div className="swiper-container art-slider-images">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <img src={slide} alt="Image" />
                  </div>
                  {/* end swiper-slide */}
                  <div className="swiper-slide">
                    <img src={slide2} alt="Image" />
                  </div>
                  {/* end swiper-slide */}
                  <div className="swiper-slide">
                    <img src={slide3} alt="Image" />
                  </div>
                  {/* end swiper-slide */}
                  <div className="swiper-slide">
                    <img src={slide4} alt="Image" />
                  </div>
                  {/* end swiper-slide */}
                  <div className="swiper-slide">
                    <img src={slide5} alt="Image" />
                  </div>
                  {/* end swiper-slide */}
                </div>
                {/* end swiper-wrapper */}
              </div>
              {/* end art-slider-images */}
            </div>
            {/* end art-slider */}
          </div>
          {/* end col-6 */}
        </div>
        {/* end row */}
      </div>
      {/* end container */}
    </section>
  );
}
