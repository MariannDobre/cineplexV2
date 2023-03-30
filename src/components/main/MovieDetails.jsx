import React, { useState } from "react";
import { useParams } from "react-router";
import "./MovieDetails.scss";

function MovieDetails({ data }) {
  const { nameUrl } = useParams();
  // console.log("Url Name:", nameUrl);
  const cardData = data.find((card) => card.nameUrl === nameUrl);
  // console.log("cardData:", cardData);
  const [showTrailer, setShowTrailer] = useState(false);

  const openTrailer = () => {
    setShowTrailer(true);
  };

  const closeTrailer = () => {
    setShowTrailer(false);
  };

  return (
    <div>
      {cardData && (
        <div>
          <img src={cardData.imageUrl} alt="Movie Poster" />
          <p>{cardData.name}</p>
          <button onClick={openTrailer}>Watch Trailer</button>
          {showTrailer && (
            <div className="overlay">
              <div className="iframe-container">
                <iframe
                  src={cardData.trailer}
                  title="YouTube Trailer"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                <span className="close-btn" onClick={closeTrailer}>
                  Close
                </span>
              </div>
            </div>
          )}
        </div>
      )}
      {/* <img src={cardData.imageUrl} alt="Movie Poster" />
      <p>{cardData.name}</p> */}
    </div>
  );
}

export default MovieDetails;
