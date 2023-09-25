import { useSelector, useDispatch } from "react-redux";
import Mynavbar from "./component/Mynavbar";
import Cart from "./component/Cart";
import ShowProducts from "./component/ShowProducts";
import Notification from "./component/Notification";
import { sendCartData, fetchCartData } from "./store/cart-actions";
import { useEffect } from "react";
let initial = true;
function App() {
  const dispatch = useDispatch();
  const toggleCart = useSelector((state) => state.toggleCart.togglecart);
  const notification = useSelector((state) => state.toggleCart.notification);
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);
  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }
    if (products.changed) {
      dispatch(sendCartData(products));
    }
  }, [products, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Mynavbar />
      {toggleCart ? <Cart /> : null}
      <ShowProducts />
    </>
  );
}

export default App;
