import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./components/login/LogIn";
import Home from "./components/main/Home";
import Profile from "./components/links/Profile";
import Favorites from "./components/links/Favorites";
import Trending from "./components/links/Trending";
import Upcoming from "./components/links/Upcoming";
import MovieDetails from "./components/main/MovieDetails";
import UpcomingDetails from "./components/main/UpcomingDetails";
import TrendingTrailer from "./components/links/TrendingTrailer";
import { data } from "./components/cardData";
import { upcomingTitles } from "./components/upcoming";
import { trendingData } from "./components/trending";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route
          path={`/movies/:nameUrl`}
          element={<MovieDetails data={data} />}
        />
        <Route
          path={`/upcoming/:url`}
          element={<UpcomingDetails upcomingTitles={upcomingTitles} />}
        />
        <Route
          path="/trending/:url"
          element={<TrendingTrailer trendingData={trendingData} />}
        />
      </Routes>
    </Router>
  </React.StrictMode>
);
