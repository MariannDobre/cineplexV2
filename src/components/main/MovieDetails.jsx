import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./MovieDetails.scss";
import { BsFillBookmarkFill, BsStarFill } from "react-icons/bs";

function MovieDetails({ data }) {
  const { nameUrl } = useParams();
  // console.log("Url Name:", nameUrl);
  const cardData = data.find((card) => card.nameUrl === nameUrl);
  // console.log("cardData:", cardData);
  const [showTrailer, setShowTrailer] = useState(false);

  const openTrailer = () => {
    setShowTrailer(true);
  };

  const closeTrailer = () => {
    setShowTrailer(false);
  };

  useEffect(() => {
    const chart = document.querySelector(".user_score_chart");
    const percent = chart.dataset.percent;
    const trackColor = chart.dataset.trackColor;
    const barColor = chart.dataset.barColor;
    const size = 60;
    const lineWidth = 6;
    const radius = size / 2 - lineWidth / 2;
    const canvas = chart.querySelector("canvas");
    const context = canvas.getContext("2d");
    canvas.width = size;
    canvas.height = size;
    const startAngle = -Math.PI / 2;
    const endAngle = startAngle + (Math.PI * 2 * percent) / 100;
    context.beginPath();
    context.arc(size / 2, size / 2, radius, 0, Math.PI * 2, false);
    context.lineWidth = lineWidth;
    context.strokeStyle = trackColor;
    context.stroke();
    context.beginPath();
    context.arc(size / 2, size / 2, radius, startAngle, endAngle, false);
    context.lineWidth = lineWidth;
    context.strokeStyle = barColor;
    context.stroke();
  }, []);

  const bgColor = {
    backgroundColor: `${cardData.bgColor}`,
  };

  return (
    <div className="details__container-bg">
      {cardData && (
        <div className="details__container">
          <div className="details__container-main" style={bgColor}>
            <div className="details__container-secondary">
              <div className="details__container-watch">
                <img
                  className="details__container-watch-image"
                  src={cardData.poster}
                  alt="Movie Poster"
                />
                <button
                  className="details__container-watch-button"
                  onClick={openTrailer}
                >
                  Watch Trailer
                </button>
              </div>

              <div className="details__container-about">
                <div className="details__container-about-name">
                  <p className="details__container-about-name-title">
                    {cardData.name}
                  </p>
                  <p className="details__container-about-name-year">
                    ({cardData.year})
                  </p>
                </div>

                <div className="details__container-about-type">
                  <p className="details__container-about-type-about">
                    {cardData.type}
                  </p>
                  <p style={{ fontSize: "17.5px", color: "#fff" }}>●</p>
                  <p className="details__container-about-type-duration">
                    {cardData.duration}
                  </p>
                </div>

                <div className="details__container-about-score">
                  <div>
                    <div className="outer__ring">
                      <div
                        className="user_score_chart"
                        data-percent={cardData.score}
                        data-track-color={cardData.trackColor}
                        data-bar-color={cardData.barColor}
                      >
                        <div className="percent">
                          <span>{cardData.score}</span>
                        </div>
                        <canvas height="60" width="60" />
                      </div>
                    </div>
                  </div>
                  <p className="details__container-about-score-users">
                    Users score
                  </p>
                  <button className="details__container-about-score-button">
                    <BsFillBookmarkFill />
                  </button>
                  <button className="details__container-about-score-button">
                    <BsStarFill />
                  </button>
                </div>

                <div className="details__container-about-presentation">
                  <p className="details__container-about-presentation-title">
                    Presentation
                  </p>
                  <p className="details__container-about-presentation-description">
                    {cardData.presentation}
                  </p>
                </div>

                <div className="details__container-about-cast">
                  <div>
                    <p>Director</p>
                    <p>{cardData.director}</p>
                  </div>

                  <div>
                    <p>Writters</p>
                    <p>{cardData.writters}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button>
            <BsFillBookmarkFill />
          </button>

          {showTrailer && (
            <div className="overlay">
              <div className="iframe-container">
                <iframe
                  src={cardData.trailer}
                  title="YouTube Trailer"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                <span className="close-btn" onClick={closeTrailer}>
                  Close
                </span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
