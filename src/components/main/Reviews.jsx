import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Reviews.scss";

import { reviews } from "../reviews";

function Reviews() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="reviews__container">
      <h1 className="reviews__container-title">Reviews</h1>
      <Slider {...settings}>
        {reviews.map((post, index) => (
          <div className="slide" key={reviews[index].id}>
            <p className="slide__name">{post.name}</p>
            <p className="slide__title">"{post.title}"</p>
            <p className="slide__description">{post.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Reviews;
