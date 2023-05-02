import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import TrendingSlider from "../main/TrendingSlider";
import { trendingData } from "../trending";
import "./Trending.scss";

function Trending() {
  return (
    <HelmetProvider>
      <div className="trending__container">
        <Helmet>
          <title>Cineplex | Trending</title>
        </Helmet>
        <Nav />
        <div className="trending__content">
          <TrendingSlider trendingData={trendingData} />
          <Footer />
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Trending;
