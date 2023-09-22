import CounterPage from "./component/CounterPage";
import Home from "./component/Home";
import { useSelector } from "react-redux";

function App() {
  const auth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      {auth && <Home />}
      <CounterPage />
    </>
  );
}

export default App;
