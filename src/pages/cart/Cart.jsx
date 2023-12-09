import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContextProvider";
import { product } from "../../products";
import CartItem from "./CartItem";
import "./Cart.css";

const Cart = () => {
  const { cartItems } = useContext(ShopContext);

  return (
    <div className="cart">
      <div>
        <h1>YOUR CART ITEMS </h1>
      </div>
      <div className="cartItems ">
        {product.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
    </div>
  );
};
export default Cart;
