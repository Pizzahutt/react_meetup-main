import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favoritesSlice";
import meetupsReducer from "./meetupsSlice";

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
        meetups: meetupsReducer,
  },
});

export default store;
