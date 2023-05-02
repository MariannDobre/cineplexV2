// import React from "react";
// import Nav from "../nav/Nav";
// import Footer from "../footer/Footer";
// import { Helmet, HelmetProvider } from "react-helmet-async";
// import useFavoritesStore from "../favoriteStore";
// import { data } from "../cardData";
// import "./Favorites.scss";

// function Favorites() {
//   const favorites = useFavoritesStore((state) => state.favorites);
//   const removeFavorite = useFavoritesStore((state) => state.removeFavorite);

//   return (
//     <HelmetProvider>
//       <div className="favorites__container">
//         <Helmet>
//           <title>Cineplex | Favorites</title>
//         </Helmet>
//         <Nav />
//         <div className="favorites__content">
//           {favorites.map((favorite) => {
//             if (!favorite) return null;

//             const { id } = favorite;
//             const { name, imageUrl, year } = data.find(
//               (card) => card.id === id
//             );

//             return (
//               <div className="favorites__content-card" key={id}>
//                 <div className="favorites__content-card-description">
//                   <h2 className="favorites__content-card-description-name">
//                     {name}
//                   </h2>
//                   <p className="favorites__content-card-description-year">
//                     ({year})
//                   </p>
//                 </div>
//                 <img
//                   className="favorites__content-card-img"
//                   src={imageUrl}
//                   alt={name}
//                 />
//                 <button
//                   className="favorites__content-card-removeButton"
//                   onClick={() => removeFavorite(id)}
//                 >
//                   Remove from favorites
//                 </button>
//               </div>
//             );
//           })}
//           <Footer />
//         </div>
//       </div>
//     </HelmetProvider>
//   );
// }

// export default Favorites;

import React from "react";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";
import useFavoritesStore from "../favoriteStore";
import { data } from "../cardData";
import useUpcomingFavoritesStore from "../upcomingFavoriteStore";
import { upcomingTitles } from "../upcoming";
import "./Favorites.scss";

function Favorites() {
  const favorites = useFavoritesStore((state) => state.favorites);
  const removeFavorite = useFavoritesStore((state) => state.removeFavorite);
  const upcomingFavorites = useUpcomingFavoritesStore(
    (state) => state.upcomingFavorites
  );
  const removeUpcomingFavorite = useUpcomingFavoritesStore(
    (state) => state.removeUpcomingFavorite
  );

  return (
    <HelmetProvider>
      <div className="favorites__container">
        <Helmet>
          <title>Cineplex | Favorites</title>
        </Helmet>
        <Nav />
        <div className="favorites__content">
          {/* Render regular favorites */}
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
                  onClick={() => {
                    removeFavorite(id);
                  }}
                >
                  Remove from favorites
                </button>
              </div>
            );
          })}

          {/* Render upcoming favorites */}
          {upcomingFavorites.map((upcomingFavorite) => {
            if (!upcomingFavorite) return null;

            const { id } = upcomingFavorite;
            const { title, cardImage, year } = upcomingTitles.find(
              (card) => card.id === id
            );

            return (
              <div className="favorites__content-card" key={id}>
                <div className="favorites__content-card-description">
                  <h2 className="favorites__content-card-description-name">
                    {title}
                  </h2>
                  <p className="favorites__content-card-description-year">
                    ({year})
                  </p>
                </div>
                <img
                  className="favorites__content-card-img"
                  src={cardImage}
                  alt={title}
                />
                <button
                  className="favorites__content-card-removeButton"
                  onClick={() => removeUpcomingFavorite(id)}
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
