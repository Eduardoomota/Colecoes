import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import favoritesReducer from "./reducers/favoritesReducer";

const reducers = combineReducers({
  favorites: favoritesReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
