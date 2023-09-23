import CounterPage from "./component/CounterPage";
import Home from "./component/Home";
import { authActions } from "./store/store";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isAuthenticated);
  function showhome() {
    dispatch(authActions.toggleAuthentication());
  }
  return (
    <>
      {auth ? <Home /> : <button onClick={showhome}>show this</button>}
      <CounterPage />
    </>
  );
}

export default App;
