import { create } from "zustand";

const useFavoritesStore = create((set) => ({
  favorites: [],
  addFavorite: (id, movie) =>
    set((state) => ({ favorites: [...state.favorites, { id, movie }] })),

  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((fav) => fav.id !== id),
    })),
}));

export default useFavoritesStore;
