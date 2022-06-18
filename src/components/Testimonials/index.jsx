import React from "react";
import "./testimonials.css";
// core version + navigation, pagination modules:
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonials">
          <div className="client__avatar">
            <img src="" alt="" />
          </div>
          <h5>Ernest Achiever</h5>
          <small className="client__review">Description</small>
        </SwiperSlide>
        <SwiperSlide className="testimonials">
          <div className="client__avatar">
            <img src="" alt="" />
          </div>
          <h5>Ernest Achiever</h5>
          <small className="client__review">Description</small>
        </SwiperSlide>
        <SwiperSlide className="testimonials">
          <div className="client__avatar">
            <img src="" alt="" />
          </div>
          <h5>Ernest Achiever</h5>
          <small className="client__review">Description</small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Testimonials;
