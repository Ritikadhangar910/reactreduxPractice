import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { productSliceAction } from "../store/products";
const ShowProducts = () => {
  const dispatch = useDispatch();
  const Dummydata = [
    {
      id: "p1",
      price: 100,
      title: "my first book",
      description: "my first book Chetan Bhagat",
    },
    {
      id: "p2",
      price: 80,
      title: "my second book",
      description: "3 mistakes of my life",
    },
    {
      id: "p3",
      price: 50,
      title: "my third book",
      description: "my third book Chetan Bhagat",
    },
    {
      id: "p4",
      price: 20,
      title: "my forth book",
      description: "half girlfriend",
    },
    {
      id: "p5",
      price: 200,
      title: "my seventh book",
      description: "3 mistakes of my life",
    },
    {
      id: "p6",
      price: 50,
      title: "my sixth book",
      description: "Rich dad poor dad",
    },
  ];
  function productsonCart(item) {
    dispatch(productSliceAction.addProducts(item));
  }
  return (
    <>
      <h2 className="text-center pt-2">Show all products</h2>
      {Dummydata.map((item) => (
        <div key={item.id} className="px-3 py-2">
          <h4>Title: {item.title}</h4>
          <p>Price: {item.price}</p>
          <p>Description: {item.description}</p>
          <Button variant="primary" onClick={() => productsonCart(item)}>
            Add to Cart
          </Button>
        </div>
      ))}
    </>
  );
};
export default ShowProducts;
