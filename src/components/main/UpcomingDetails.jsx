import React, { useCallback, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { BsFillBookmarkFill, BsStarFill } from "react-icons/bs";
import UpcomingCast from "./UpcomingCast";

function UpcomingDetails({ upcomingTitles }) {
  const { url } = useParams();
  // console.log("Url Name:", url);
  const cardData = upcomingTitles.find((card) => card.url === url);
  // console.log("cardData:", cardData);

  const [showTrailer, setShowTrailer] = useState(false);

  const openTrailer = () => {
    setShowTrailer(true);
  };

  const closeTrailer = useCallback(() => {
    setShowTrailer(false);
  }, []);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.keyCode === 27) {
        closeTrailer();
      }
    },
    [closeTrailer]
  );

  useEffect(() => {
    if (showTrailer) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showTrailer, handleKeyDown]);

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
    backgroundImage: `${cardData.bgColor}`,
  };

  const bgImage = {
    backgroundImage: `url(${cardData.bgImage})`,
    backgroundPosition: "left calc((50vw - 170px) - 340px) top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const bgButton = {
    backgroundImage: `${cardData.bgColor}`,
  };

  const ScoreDropdown = () => {
    return (
      <div className="dropdownscore__container">
        <ul>
          <li className="dropdownscore__container-item-1">
            Excellent: <span>100-75</span>
          </li>
          <li className="dropdownscore__container-item-2">
            Good: <span>75-50</span>
          </li>
          <li className="dropdownscore__container-item-3">
            Average: <span>50</span>
          </li>
          <li className="dropdownscore__container-item-4">
            Mediocre: <span>50-25</span>
          </li>
          <li className="dropdownscore__container-item-5">
            Bad: <span>25-1</span>
          </li>
        </ul>
      </div>
    );
  };

  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <div className="details__container-bg">
      <Helmet>
        <title>{cardData.title}</title>
      </Helmet>
      {cardData && (
        <div className="details__container" style={bgImage}>
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
                    {cardData.title}
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
                  <button
                    className="details__container-about-score-button"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
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
                  <div className="details__container-about-cast-director">
                    <p className="details__container-about-cast-director-title">
                      Director
                    </p>
                    <p className="details__container-about-cast-director-subtitle">
                      {cardData.director}
                    </p>
                  </div>

                  <div className="details__container-about-cast-writters">
                    <p className="details__container-about-cast-writters-title">
                      Writters
                    </p>
                    <p className="details__container-about-cast-writters-subtitle">
                      {cardData.writters}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {showDropdown && <ScoreDropdown />}

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
                <span
                  className="close-btn"
                  onClick={closeTrailer}
                  style={bgButton}
                >
                  Close Trailer
                </span>
              </div>
            </div>
          )}
        </div>
      )}
      <div className="movieDetails__container">
        <div className="movieDetails__container-fav">
          <p className="movieDetails__container-fav-title">Your favorites</p>
          <Link className="movieDetails__container-fav-link" to="/favorites">
            Favorites
          </Link>
        </div>

        <div className="movieDetails__container-status">
          <p className="movieDetails__container-status-title">Status</p>
          <p className="movieDetails__container-status-subtitle">
            {cardData.status}
          </p>
        </div>

        <div className="movieDetails__container-language">
          <p className="movieDetails__container-language-title">Language</p>
          <p className="movieDetails__container-language-subtitle">
            {cardData.language}
          </p>
        </div>

        <div className="movieDetails__container-budget">
          <p className="movieDetails__container-budget-title">Budget</p>
          <p className="movieDetails__container-budget-subtitle">
            {cardData.budget}
          </p>
        </div>

        <div className="movieDetails__container-income">
          <p className="movieDetails__container-income-title">Income</p>
          <p className="movieDetails__container-income-subtitle">
            {cardData.income}
          </p>
        </div>
      </div>

      <div className="movieDetails__container-castTitle">
        <p className="movieDetails__container-castTitle-content">Main cast</p>
      </div>

      <div className="movieDetails__container-cast">
        <UpcomingCast upcomingCastId={cardData.id} />
      </div>

      {console.log(cardData.castLink)}

      <div className="movieDetails__container-castLink">
        <a
          className="movieDetails__container-castLink-content"
          href={cardData.castLink}
          target="_blank"
          rel="noreferrer"
        >
          Full cast and crew
        </a>
      </div>
    </div>
  );
}

export default UpcomingDetails;
