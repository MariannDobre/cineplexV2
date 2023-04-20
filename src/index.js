import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./components/login/LogIn";
import Home from "./components/main/Home";
import Profile from "./components/links/Profile";
import Favorites from "./components/links/Favorites";
import Trending from "./components/links/Trending";
import Upcoming from "./components/links/Upcoming";
import Support from "./components/links/Support";
import MovieDetails from "./components/main/MovieDetails";
import UpcomingDetails from "./components/main/UpcomingDetails";
import { data } from "./components/cardData";
import { upcomingTitles } from "./components/upcoming";
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
        <Route path="/support" element={<Support />} />
        <Route
          path={`/movies/:nameUrl`}
          element={<MovieDetails data={data} />}
        />
        <Route
          path={`/upcoming/:url`}
          element={<UpcomingDetails upcomingTitles={upcomingTitles} />}
        />
      </Routes>
    </Router>
  </React.StrictMode>
);
