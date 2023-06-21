import { Swiper, SwiperSlide } from "swiper/react";

export default function CarouselItems(props) {
  return (
    <SwiperSlide style={{ background: `url(${props.img})` }}>
      <div
        className="mobile-slide"
        style={{ background: `url(${props.img2})` }}
      />
    </SwiperSlide>
  );
}
