import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { Link } from "react-router-dom";
import { BsPlayFill } from "react-icons/bs";
import "./TrendingSlider.scss";
import "swiper/swiper-bundle.min.css";

function TrendingSlider({ trendingData }) {
  return (
    <Swiper
      slidesPerView={1}
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {trendingData.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            className="shadow"
            style={{
              backgroundImage: `url(${slide.bgImage})`,
              height: "70rem",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="shadow__content">
              <img
                className="shadow__content-img"
                src={slide.poster}
                alt="Movie Poster"
              />
              <div className="shadow__content-box">
                <Link
                  to={`/trending/${slide.url}`}
                  className="shadow__content-button"
                >
                  <BsPlayFill />
                </Link>
                <div className="shadow__content-box-header">
                  <p className="shadow__content-box-header-title">
                    {slide.title}
                  </p>
                  <p className="shadow__content-box-header-subtitle">
                    {slide.content}
                  </p>
                </div>
                <p className="shadow__content-box-duration">{slide.duration}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default TrendingSlider;
