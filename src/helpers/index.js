export const isFavorite = (card, data) => {
  const favoriteFilter = data.filter((item) => item.name === card.name);

  if (favoriteFilter.length === 0) {
    return false;
  }

  return true;
};
