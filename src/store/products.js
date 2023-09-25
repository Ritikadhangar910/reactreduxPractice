import { createSlice } from "@reduxjs/toolkit";
const initialProductState = {
  products: [],
  changed: false,
};
const productSlice = createSlice({
  name: "product",
  initialState: initialProductState,
  reducers: {
    replaceCart(state, action) {
      state.products = action.payload.products;
    },
    addProducts(state, action) {
      state.changed = true;
      let addedproduct = action.payload;
      let productIndex = state.products.findIndex((item) => {
        return item.id === addedproduct.id;
      });
      if (productIndex === -1) {
        const obj = {
          id: addedproduct.id,
          title: addedproduct.title,
          description: addedproduct.description,
          quantity: 1,
          price: addedproduct.price,
        };
        state.products.push(obj);
      } else {
        let obj = state.products[productIndex];
        obj.quantity++;
        state.products[productIndex] = obj;
      }
    },
    removeProducts(state, action) {
      state.changed = true;
      let addedproduct = action.payload;
      let productIndex = state.products.findIndex((item) => {
        return item.id === addedproduct;
      });
      let obj = { ...state.products[productIndex] };
      obj.quantity--;
      if (obj.quantity > 0) {
        state.products[productIndex] = obj;
      } else {
        const removeItem = state.products.filter((item) => {
          return item.id !== addedproduct;
        });
        state.products = removeItem;
      }
    },
  },
});
export const productSliceAction = productSlice.actions;
export default productSlice.reducer;
