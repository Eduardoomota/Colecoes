export const addToFavorites = (card) => ({
  type: "@favoritesAction/ADD",
  card,
});

export const removeToFavorites = (card) => ({
  type: "@favoritesAction/REMOVE",
  card,
});
