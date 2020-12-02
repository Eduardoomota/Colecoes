const favoritesReducer = (state = [], action) => {
  const { card, type } = action;
  switch (type) {
    case "@favoritesAction/ADD":
      return card;
    case "@favoritesAction/REMOVE":
      return card;
    default:
      return state;
  }
};

export default favoritesReducer;
