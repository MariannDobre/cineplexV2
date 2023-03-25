import React from "react";
import Nav from "../nav/Nav";
import Content from "./Content";
import "./Home.scss";

function Home() {
  return (
    <div className="home__container">
      <Nav />
      <Content />
    </div>
  );
}

export default Home;
