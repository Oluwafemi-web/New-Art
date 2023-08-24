import React, { useEffect, useState, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { PortableText } from "@portabletext/react";
import LanguageContext from "../Context/language-context";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore from "swiper";
import { Navigation, Pagination, Controller, Autoplay } from "swiper/modules";

import partner from "../../images/Logo1.jpg";
import partner2 from "../../images/palma arte OK.jpg";
import partner3 from "../../images/object415932109.jpg";

import sanityClient from "../../client";

SwiperCore.use([Navigation, Pagination, Controller, Autoplay]);

export default function History(props) {
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [historyData, setHistoryData] = useState(null);
  const ctx = useContext(LanguageContext);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "history"] | order(_createdAt desc){
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
  }, [ctx.languageData]);
  if (!historyData || historyData.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <section className="content-section">
        <div className="container">
          <div className="row g-0 align-items-center">
            <div className="col-lg-6">
              <div className="art-slider">
                <div className="titles">
                  <h6>{props.subheading}</h6>
                  <PortableText value={props.heading} />
                </div>
                <Swiper
                  modules={[Navigation, Pagination, Controller]}
                  spaceBetween={50}
                  slidesPerView={1}
                  onSwiper={setControlledSwiper}
                  autoplaydirection="vertical"
                  direction="vertical"
                  rewind
                  className="art-slider-content swiper-container"
                >
                  {historyData.map((item, index) => (
                    <SwiperSlide key={index} className="swiper-slide-duplicate">
                      <span>{item.index}</span>
                      <h3>{item.title}</h3>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

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
                  rewind
                  className="art-slider-image swiper-container"
                >
                  {historyData.map((item, index) => (
                    <SwiperSlide key={index}>
                      <img src={item.image.asset.url} alt="Image" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="partners">
        <div className="container">
          <div className="section-title text-center">
            <h2>Partners</h2>
          </div>
          <div className="grid-fr">
            <img src={partner} />
            <img src={partner2} />
            <img src={partner3} />
          </div>
        </div>
      </section>
    </>
  );
}
