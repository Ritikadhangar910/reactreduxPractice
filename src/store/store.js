import { configureStore, createSlice } from "@reduxjs/toolkit";
const intialCounter = { counter: 0 };
const counterSlice = createSlice({
  name: "counter",
  initialState: intialCounter,
  reducers: {
    increament(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
  },
});
const initialAuthState = {
  isAuthenticated: true,
};
const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    toggleAuthentication(state) {
      state.isAuthenticated = !state.isAuthenticated;
    },
  },
});
const store = configureStore({
  reducer: { countervalue: counterSlice.reducer, auth: authSlice.reducer },
});
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
