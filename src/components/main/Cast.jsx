import React from "react";
// import { castData } from "../castData";
import * as castData from "../castData";
import "./Cast.scss";

function Cast({ castDataId }) {
  // const cast = castData.find((cast) => cast.id === castDataId);
  const cast = castData.castData.find((cast) => cast.id === castDataId);

  return (
    <div>
      {cast && (
        <div className="cast__container">
          <div className="cast__container-card">
            <img
              className="cast__container-card-img"
              src={cast.actorImg1}
              alt="Actor Face"
            />
            <p className="cast__container-card-actorname">{cast.actorName1}</p>
            <p className="cast__container-card-moviename">{cast.movieName1}</p>
          </div>

          <div className="cast__container-card">
            <img
              className="cast__container-card-img"
              src={cast.actorImg2}
              alt="Actor Face"
            />
            <p className="cast__container-card-actorname">{cast.actorName2}</p>
            <p className="cast__container-card-moviename">{cast.movieName2}</p>
          </div>

          <div className="cast__container-card">
            <img
              className="cast__container-card-img"
              src={cast.actorImg3}
              alt="Actor Face"
            />
            <p className="cast__container-card-actorname">{cast.actorName3}</p>
            <p className="cast__container-card-moviename">{cast.movieName3}</p>
          </div>

          <div className="cast__container-card">
            <img
              className="cast__container-card-img"
              src={cast.actorImg4}
              alt="Actor Face"
            />
            <p className="cast__container-card-actorname">{cast.actorName4}</p>
            <p className="cast__container-card-moviename">{cast.movieName4}</p>
          </div>

          <div className="cast__container-card">
            <img
              className="cast__container-card-img"
              src={cast.actorImg5}
              alt="Actor Face"
            />
            <p className="cast__container-card-actorname">{cast.actorName5}</p>
            <p className="cast__container-card-moviename">{cast.movieName5}</p>
          </div>

          <div className="cast__container-card">
            <img
              className="cast__container-card-img"
              src={cast.actorImg6}
              alt="Actor Face"
            />
            <p className="cast__container-card-actorname">{cast.actorName6}</p>
            <p className="cast__container-card-moviename">{cast.movieName6}</p>
          </div>

          <div className="cast__container-card">
            <img
              className="cast__container-card-img"
              src={cast.actorImg7}
              alt="Actor Face"
            />
            <p className="cast__container-card-actorname">{cast.actorName7}</p>
            <p className="cast__container-card-moviename">{cast.movieName7}</p>
          </div>

          <div className="cast__container-card">
            <img
              className="cast__container-card-img"
              src={cast.actorImg8}
              alt="Actor Face"
            />
            <p className="cast__container-card-actorname">{cast.actorName8}</p>
            <p className="cast__container-card-moviename">{cast.movieName8}</p>
          </div>

          <div className="cast__container-card">
            <img
              className="cast__container-card-img"
              src={cast.actorImg9}
              alt="Actor Face"
            />
            <p className="cast__container-card-actorname">{cast.actorName9}</p>
            <p className="cast__container-card-moviename">{cast.movieName9}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cast;
