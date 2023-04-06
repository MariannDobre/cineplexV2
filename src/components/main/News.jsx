import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./News.scss";

import { news } from "../news";

function News() {
  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 9250,
    autoplaySpeed: 1,
    cssEase: "linear",
  };

  return (
    <div className="reviews__container">
      <h1 className="reviews__container-title">News</h1>
      <Slider {...settings}>
        {news.map((post, index) => (
          <div className="slide" key={news[index].id}>
            <p className="slide__name">{post.name}</p>
            <p className="slide__title">"{post.title}"</p>
            <p className="slide__description">{post.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default News;
