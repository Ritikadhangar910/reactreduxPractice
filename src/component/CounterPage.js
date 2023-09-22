import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/store";
const CounterPage = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.countervalue.counter);
  function increamentHandler() {
    dispatch(counterActions.increament());
  }
  function decrementHandler() {
    dispatch(counterActions.decrement());
  }
  return (
    <>
      <h3>Counter: {counter}</h3>
      <h2>Increment the count</h2>
      <button onClick={increamentHandler}>Incrementby5</button>
      <h2>Decrement the count</h2>
      <button onClick={decrementHandler}>Decrementby5</button>
    </>
  );
};
export default CounterPage;
