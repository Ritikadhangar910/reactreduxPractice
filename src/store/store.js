import { configureStore } from "@reduxjs/toolkit";
import toggleCartReducer from "./toggleCart";
import productReducer from "./products";
const store = configureStore({
  reducer: { toggleCart: toggleCartReducer, products: productReducer },
});

export default store;
