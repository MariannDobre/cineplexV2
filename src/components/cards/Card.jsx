import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

function Card(props) {
  return (
    <div className="card__container">
      <div className="card__container-header">
        <h2 className="card__container-header-title">{props.name}</h2>
        <p className="card__container-header-subtitle">{props.year}</p>
      </div>
      <img src={props.image} alt="Poster" />
      <Link to={`/movies/${props.id}`} className="card__container-button">
        View More
      </Link>
    </div>
  );
}

export default Card;
