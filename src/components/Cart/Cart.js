import React from "react";
import { useCartContext } from "../../context/cart-context";
import CartItem from "../CartItem/CartItem";
import OrderDetails from "../OrderDetails/OrderDetails";
import "./Cart.css";

const Cart = () => {
  const { cart } = useCartContext();
  return (
    <div className="cart-page">
      <div className="cart-container">
        <h4>My Cart ({cart.length})</h4>
        {cart.map((cartItem) => (
          <CartItem key={cartItem.id} {...cartItem} />
        ))}
      </div>
      <OrderDetails />
    </div>
  );
  //cart container //cartItem
  //sidebar for bill
  //saved Items
};

export default Cart;
