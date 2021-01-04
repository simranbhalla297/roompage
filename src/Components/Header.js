import React from "react";
import HeaderData from "./HeaderData";
import HeaderSlide from "./HeaderSlide";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";
SwiperCore.use([Pagination, Navigation, Scrollbar, A11y]);

function Header() {
  console.log(HeaderData);
  return (
    <div className="header">
      <Swiper
        className="swiper_container"
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        //pagination={{ clickable: true }}

        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {HeaderData.map((data, index) => {
          return (
            <SwiperSlide key={index}>
              <HeaderSlide details={data} />
            </SwiperSlide>
          );
        })}

        <div
          className="swiper-button-prev"
          style={{ color: "green", fontSize: "30px" }}
        />
        <div
          className="swiper-button-next"
          style={{ color: "green", fontSize: "30px" }}
        />
      </Swiper>
    </div>
  );
}

export default Header;
