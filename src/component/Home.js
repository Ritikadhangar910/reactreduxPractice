import { useDispatch } from "react-redux";
import { authActions } from "../store/store";
const Home = () => {
  const dispatch = useDispatch();
  function logoutHandler() {
    dispatch(authActions.toggleAuthentication());
  }
  return (
    <>
      <h2>this is home page</h2>
      <p>you are logged in</p>
      <button onClick={logoutHandler}>logged out</button>
    </>
  );
};
export default Home;
