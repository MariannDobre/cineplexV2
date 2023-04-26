import React from "react";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";
import useFavoritesStore from "../favoriteStore";
import { data } from "../cardData";
import "./Favorites.scss";

function Favorites() {
  const favorites = useFavoritesStore((state) => state.favorites);
  const removeFavorite = useFavoritesStore((state) => state.removeFavorite);

  return (
    <HelmetProvider>
      <div className="favorites__container">
        <Helmet>
          <title>Cineplex | Favorites</title>
        </Helmet>
        <Nav />
        <div className="favorites__content">
          {favorites.map((favorite) => {
            if (!favorite) return null;

            const { id } = favorite;
            const { name, imageUrl, year } = data.find(
              (card) => card.id === id
            );

            return (
              <div className="favorites__content-card" key={id}>
                <div className="favorites__content-card-description">
                  <h2 className="favorites__content-card-description-name">
                    {name}
                  </h2>
                  <p className="favorites__content-card-description-year">
                    ({year})
                  </p>
                </div>
                <img
                  className="favorites__content-card-img"
                  src={imageUrl}
                  alt={name}
                />
                <button
                  className="favorites__content-card-removeButton"
                  onClick={() => removeFavorite(id)}
                >
                  Remove from favorites
                </button>
              </div>
            );
          })}
          <Footer />
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Favorites;
