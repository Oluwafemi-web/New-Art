import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import slide from "../../images/slide01.jpg";
export default function CarouselItems() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide style={{ background: slide }}>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
}

<div className="swiper-container slider-images">
  <div className="swiper-wrapper">
    <SwiperSlide>
      <div className="swiper-slide" data-background="images/slide01.jpg">
        <div
          className="mobile-slide"
          data-background="images/slide-mobile01.jpg"
        ></div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="swiper-slide" data-background="images/slide02.jpg">
        <div
          className="mobile-slide"
          data-background="images/slide-mobile02.jpg"
        ></div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="swiper-slide" data-background="images/slide03.jpg">
        <div
          className="mobile-slide"
          data-background="images/slide-mobile03.jpg"
        ></div>
      </div>
    </SwiperSlide>
  </div>
  <div className="container-fluid slider-nav">
    <div className="swiper-pagination" />
    {/* end swiper-pagination */}
    <div className="swiper-fraction" />
    {/* end swiper-fraction */}
    <div className="button-prev">
      <i className="far fa-chevron-down" />
    </div>
    {/* end swiper-button-prev */}
    <div className="button-next">
      <i className="far fa-chevron-up" />
    </div>
    {/* end swiper-button-next */}
  </div>
</div>;
