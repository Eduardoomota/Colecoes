import { addToFavorites, removeToFavorites } from "../actions/favoritesAction";

export const addToFavoritesThunk = (card) => (dispatch, getState) => {
  const { favorites } = getState();
  dispatch(addToFavorites([...favorites, card]));
};

export const removeToFavoritesThunk = (card) => (dispatch, getState) => {
  const { favorites } = getState();
  const removeFavorite = favorites.filter((item) => item.name !== card.name);
  dispatch(removeToFavorites(removeFavorite));
};
