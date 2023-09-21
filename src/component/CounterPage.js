import { useSelector, useDispatch } from "react-redux";
const CounterPage = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  function increamentHandler() {
    dispatch({ type: "increament5" });
  }
  function decrementHandler() {
    dispatch({ type: "decrement5" });
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
