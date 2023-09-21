import { createStore } from "redux";
const counterReducer = (state = { counter: 1 }, action) => {
  if (action.type === "increament5") {
    return {
      counter: state.counter + 5,
    };
  } else if (action.type === "decrement5") {
    return {
      counter: state.counter - 5,
    };
  }
  return state;
};
const store = createStore(counterReducer);
export default store;
