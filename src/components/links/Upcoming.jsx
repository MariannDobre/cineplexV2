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
          <div>
            <div className="upcoming__card">
              {upcomingTitles.map((upcoming, index) => (
                <div key={upcomingTitles[index].id}>
                  <div>
                    <p>{upcoming.title}</p>
                    <p>{upcoming.year}</p>
                  </div>
                  {/* <img src={upcoming.cardImage} /> */}
                  <Link to={`/upcoming/${upcoming.url}`}>View More</Link>
                </div>
              ))}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Upcoming;
