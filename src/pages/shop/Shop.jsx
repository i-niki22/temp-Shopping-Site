import React, { useContext } from "react";
import "./shop.css";
import { product } from "../../products";
import { ShopContext } from "../../Context/ShopContextProvider";
const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>YOUR STORE</h1>
      </div>
      <div className="products">
        {product.map((prod) => {
          const { id, productName, price, productImage } = prod;
          const { addToCart, cartItems } = useContext(ShopContext);
          const cartItemAmount = cartItems[id];
          return (
            <div className="product">
              <img src={productImage} alt={productName} />
              <div className="description">
                <p>
                  <b>{productName}</b>
                </p>
                <p> Rs{price}</p>
              </div>
              <button className="addToCartBttn" onClick={() => addToCart(id)}>
                Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Shop;
