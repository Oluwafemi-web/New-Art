import React, { useEffect, useState, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { PortableText } from "@portabletext/react";
import SanityContext from "./Context/sanity-context";

import LanguageContext from "./Context/language-context";
import "swiper/css";

// import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore from "swiper";
import { Navigation, Pagination, Controller } from "swiper/modules";

import sanityClient from "../client";

SwiperCore.use([Navigation, Pagination, Controller]);

export default function Carousel() {
  const [carouselData, setCarouselData] = useState([]);
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const sanityCtx = useContext(SanityContext);
  const ctx = useContext(LanguageContext);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "carousel" && language == $language]{
           maintext,
           subtext,
           maintext2,
           subtext2,
           maintext3,
           subtext3,
           image{
             asset->{
               _id,
               url
             }
           },
           mobileimage{
             asset->{
               _id,
               url
             }
           },
           _translations[] {
            value->{
              maintext,
              subtext,
              maintext2,
              subtext2,
              maintext3,
              subtext3,
              image{
                asset->{
                  _id,
                  url
                }
              },
              mobileimage{
                asset->{
                  _id,
                  url
                }
              }
            }
         }
        }`,
        { language: ctx.languageData }
      )
      .then((data) => setCarouselData(data))
      .catch(console.error);
  }, [ctx.languageData]);
  const handleSanityLoaded = () => {
    sanityCtx.changeState(true);
  };
  useEffect(() => {
    if (!carouselData || carouselData.length === 0) {
      return sanityCtx.changeState(false);
    } else {
      handleSanityLoaded();
    }
  }, [carouselData]);

  return (
    <header className="slider">
      <Swiper
        modules={[Navigation, Pagination, Controller]}
        spaceBetween={50}
        navigation
        slidesPerView={1}
        direction="vertical"
        controller={{ control: controlledSwiper }}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        pagination={{ clickable: true, type: "progressbar" }}
        className="slider-images swiper-container"
      >
        {carouselData.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{ background: `url(${item.image.asset.url})` }}
          >
            <div
              className="mobile-slide"
              style={{ background: `url(${item.mobileimage.asset.url})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        modules={[Navigation, Controller]}
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={setControlledSwiper}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="slider-texts swiper-container"
      >
        {carouselData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="container-fluid">
              <h1>{item.maintext}</h1>
              <PortableText value={item.subtext} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="play-now">
        <a
          href="videos/video.mp4"
          data-fancybox
          data-width="640"
          data-height="360"
          className="play-btn"
        ></a>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="300px"
          height="300px"
          viewBox="0 0 300 300"
          enableBackground="new 0 0 300 300"
          xmlSpace="preserve"
        >
          <defs>
            <path
              id="circlePath"
              d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
            />
          </defs>
          <circle cx="150" cy="100" r="75" fill="none" />
          <g>
            <use xlinkHref="#circlePath" fill="none" />
            <text>
              <textPath xlinkHref="#circlePath">
                PLAY NOW - PLAY NOW - PLAY NOW -
              </textPath>
            </text>
          </g>
        </svg>
      </div>
    </header>
  );
}
