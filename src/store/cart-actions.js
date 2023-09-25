import { togglecartActions } from "./toggleCart";
import { productSliceAction } from "./products";
const axios = require("axios");
export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://reactredux-784a5-default-rtdb.firebaseio.com/cart.json"
        );

        if (response.status !== 200) {
          throw new Error("Could not fetch cart data!");
        }

        const data = response.data;

        return data;
      } catch (error) {
        throw new Error("Could not fetch cart data!");
      }
    };
    try {
      const cartData = await fetchData();
      dispatch(
        productSliceAction.replaceCart({
          products: cartData.products || [],
        })
      );
    } catch (error) {
      dispatch(
        togglecartActions.shownotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      togglecartActions.shownotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );
    const sendRequest = async () => {
      const response = await axios.put(
        "https://reactredux-784a5-default-rtdb.firebaseio.com/cart.json",
        {
          products: cart.products,
        }
      );

      if (response.status !== 200) {
        throw new Error("Sending cart data failed.");
      }
    };
    try {
      await sendRequest();

      dispatch(
        togglecartActions.shownotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        togglecartActions.shownotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
