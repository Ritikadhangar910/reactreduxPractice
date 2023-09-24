import { createSlice } from "@reduxjs/toolkit";
const initialCartState = {
  togglecart: false,
};
const togglecartSlice = createSlice({
  name: "togglecart",
  initialState: initialCartState,
  reducers: {
    togglecartHandler(state) {
      state.togglecart = !state.togglecart;
    },
  },
});
export const togglecartActions = togglecartSlice.actions;
export default togglecartSlice.reducer;
