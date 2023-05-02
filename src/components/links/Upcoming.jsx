import React from "react";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import { upcomingTitles } from "../upcoming";
import "./Upcoming.scss";

function Upcoming() {
  return (
    <HelmetProvider>
      <div className="upcoming__container">
        <Helmet>
          <title>Cineplex | Upcoming</title>
        </Helmet>
        <Nav />
        <div className="upcoming__content">
          <div className="upcoming__content-container">
            {upcomingTitles.map((upcoming, index) => (
              <div key={upcomingTitles[index].id} className="upcoming__card">
                <div className="upcoming__card-header">
                  <p className="upcoming__card-header-title">
                    {upcoming.title}
                  </p>
                  <p className="upcoming__card-header-year">
                    ({upcoming.year})
                  </p>
                </div>
                <img
                  className="upcoming__card-img"
                  src={upcoming.cardImage}
                  alt="Movie Poster"
                />
                <Link
                  className="upcoming__card-button"
                  to={`/upcoming/${upcoming.url}`}
                >
                  View More
                </Link>
              </div>
            ))}
          </div>
          <Footer />
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Upcoming;
