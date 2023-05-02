import React from "react";
import { useParams } from "react-router";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./TrendingTrailer.scss";

function TrendingTrailer({ trendingData }) {
  const { url } = useParams();
  const trendingTrailer = trendingData.find((card) => card.url === url);

  return (
    <HelmetProvider>
      <Helmet>
        <title>{trendingTrailer.pageTitle}</title>
      </Helmet>
      <div className="trendingTrailer__container">
        <div className="trendingTrailer__container-header">
          <iframe
            src={trendingTrailer.link}
            title="YouTube Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="trendingTrailer__container-header-trailer"
          ></iframe>
          <div className="trendingTrailer__container-content">
            <div className="trendingTrailer__container-content-description">
              <img
                className="trendingTrailer__container-content-description-poster"
                src={trendingTrailer.poster}
                alt="Movie Poster"
              />
              <div className="trendingTrailer__container-content-description-header">
                <p className="trendingTrailer__container-content-description-header-name">
                  {trendingTrailer.name}
                </p>
                <p className="trendingTrailer__container-content-description-header-year">
                  ({trendingTrailer.year})
                </p>
                <p className="trendingTrailer__container-content-description-header-type">
                  {trendingTrailer.type}
                </p>
                <p className="trendingTrailer__container-content-description-header-score">
                  Score: <span>{trendingTrailer.score}</span>
                </p>
              </div>
            </div>

            <div className="trendingTrailer__container-content-hr"></div>

            <div className="trendingTrailer__container-content-about">
              <p className="trendingTrailer__container-content-about-description">
                {trendingTrailer.description}
              </p>
              <p className="trendingTrailer__container-content-about-plot">
                {trendingTrailer.plot}
              </p>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default TrendingTrailer;
