import React from "react";
import Nav from "../nav/Nav";
import Content from "./Content";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./Home.scss";

function Home() {
  return (
    <HelmetProvider>
      <div className="home__container">
        <Helmet>
          <title>Cineplex | Home</title>
        </Helmet>
        <Nav />
        <Content />
      </div>
    </HelmetProvider>
  );
}

export default Home;
