import { create } from "zustand";

const useUpcomingFavoritesStore = create((set) => ({
  upcomingFavorites: [],
  addUpcomingFavorite: (id, movie) =>
    set((state) => ({
      upcomingFavorites: [...state.upcomingFavorites, { id, movie }],
    })),

  removeUpcomingFavorite: (id) =>
    set((state) => ({
      upcomingFavorites: state.upcomingFavorites.filter((fav) => fav.id !== id),
    })),
}));

export default useUpcomingFavoritesStore;
