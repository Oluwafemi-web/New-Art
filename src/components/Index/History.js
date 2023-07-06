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
import sanityClient from "../../client";

SwiperCore.use([Navigation, Pagination, Controller, Autoplay]);

export default function History() {
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [historyData, setHistoryData] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "history"]{
           index,
           title,
           image{
             asset->{
               _id,
               url
             }
           }
        }`
      )
      .then((data) => setHistoryData(data))
      .catch(console.error);
  }, []);
  if (!historyData || historyData.length === 0) {
    return <div>Loading...</div>;
  }
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
                {historyData.map((item, index) => (
                  <SwiperSlide key={index} className="swiper-slide-duplicate">
                    <span>{item.index}</span>
                    <h3>{item.title}</h3>
                  </SwiperSlide>
                ))}
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
                {historyData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <img src={item.image.asset.url} alt="Image" />
                  </SwiperSlide>
                ))}
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
