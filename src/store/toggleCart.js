import { createSlice } from "@reduxjs/toolkit";
const initialCartState = {
  togglecart: false,
  notification: null,
};
const togglecartSlice = createSlice({
  name: "togglecart",
  initialState: initialCartState,
  reducers: {
    togglecartHandler(state) {
      state.togglecart = !state.togglecart;
    },
    shownotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});
export const togglecartActions = togglecartSlice.actions;
export default togglecartSlice.reducer;
