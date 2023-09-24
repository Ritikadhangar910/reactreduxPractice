import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { productSliceAction } from "../store/products";
const Cart = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.products);
  function productsonCart(item) {
    dispatch(productSliceAction.addProducts(item));
  }
  function removecartItem(id) {
    dispatch(productSliceAction.removeProducts(id));
  }
  return (
    <div className="mx-3">
      <h2>This is Cart page</h2>
      {product.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>{item.price}</p>
          <p>{item.quantity}</p>
          <Button variant="primary" onClick={() => productsonCart(item)}>
            +{" "}
          </Button>
          <Button variant="danger" onClick={() => removecartItem(item.id)}>
            -{" "}
          </Button>
        </div>
      ))}
    </div>
  );
};
export default Cart;
