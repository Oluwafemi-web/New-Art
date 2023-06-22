import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, {
  Navigation,
  Pagination,
  Controller,
  Autoplay,
} from "swiper";
import slide from "../../images/art-slide01.jpg";
import slide2 from "../../images/art-slide02.jpg";
import slide3 from "../../images/art-slide03.jpg";
import slide4 from "../../images/art-slide04.jpg";
import slide5 from "../../images/art-slide05.jpg";
// import sanityClient from "../client";

SwiperCore.use([Navigation, Pagination, Controller, Autoplay]);

export default function History() {
  const [controlledSwiper, setControlledSwiper] = useState(null);
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

              <Swiper
                modules={[Navigation, Pagination, Controller]}
                spaceBetween={50}
                slidesPerView={3}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                onSwiper={setControlledSwiper}
                autoplaydirection="vertical"
                direction="vertical"
                loop
                className="art-slider-content swiper-container"
              >
                <SwiperSlide className="swiper-slide-duplicate">
                  <span>01</span>
                  <h3>
                    Venus <br />
                    de Milo
                  </h3>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide-duplicate">
                  <span>02</span>
                  <h3>
                    Venus <br />
                    de Milo
                  </h3>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide-duplicate">
                  <span>03</span>
                  <h3>
                    Venus <br />
                    de Milo
                  </h3>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide-duplicate">
                  <span>04</span>
                  <h3>
                    Venus <br />
                    de Milo
                  </h3>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide-duplicate">
                  <span>05</span>
                  <h3>
                    Venus <br />
                    de Milo
                  </h3>
                </SwiperSlide>
              </Swiper>
              {/* end swiper-wrapper */}
              {/* end art-slider-content */}
            </div>
            {/* end art-slider */}
          </div>
          {/* end col-6 */}
          <div className="col-lg-6">
            <div className="art-slider" data-scroll="" data-scroll-speed={1}>
              <Swiper
                modules={[Navigation, Pagination, Controller]}
                spaceBetween={50}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                slidesPerView={1}
                controller={{ control: controlledSwiper }}
                loop
                className="art-slider-image swiper-container"
              >
                <SwiperSlide>
                  <img src={slide} alt="Image" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={slide2} alt="Image" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={slide3} alt="Image" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={slide4} alt="Image" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={slide5} alt="Image" />
                </SwiperSlide>
              </Swiper>

              {/* end swiper-wrapper */}
            </div>
            {/* end art-slider-images */}
          </div>
          {/* end art-slider */}
        </div>
        {/* end col-6 */}
      </div>
      {/* end row */}

      {/* end container */}
    </section>
  );
}
