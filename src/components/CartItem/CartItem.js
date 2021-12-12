import React from "react";
import "./CartItem.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useCartContext } from "../../context/cart-context";
const CartItem = ({ id, title, price, image, qty, discount }) => {
  const { incrementItem, decrementItem, removeFromCart } = useCartContext();
  return (
    <article className="cart-item">
      <div className="cart-item-details">
        <img src={image} alt={title} />
        <div className="info">
          <h5>{title}</h5>
          <p>Price : {price}</p>
        </div>
      </div>
      <div className="cart-actions">
        <div className="increment-decrement">
          <AiOutlineMinus
            onClick={() => decrementItem(id)}
            className="increment-decrement-icon"
          />
          {qty}
          <AiOutlinePlus
            onClick={() => incrementItem(id)}
            className="increment-decrement-icon"
          />
        </div>
        <div className=".cart-btns">
          <button className="btn">Save For Later</button>
          <button className="btn btn-delete" onClick={() => removeFromCart(id)}>
            Remove
          </button>
        </div>
      </div>
    </article>
  );
};

export default CartItem;
