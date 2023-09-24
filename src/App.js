import { useSelector } from "react-redux";
import Mynavbar from "./component/Mynavbar";
import Cart from "./component/Cart";
import ShowProducts from "./component/ShowProducts";

function App() {
  const toggleCart = useSelector((state) => state.toggleCart.togglecart);

  return (
    <>
      <Mynavbar />
      {toggleCart ? <Cart /> : null}
      <ShowProducts />
    </>
  );
}

export default App;
