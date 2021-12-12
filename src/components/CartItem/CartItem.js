import React from "react";
import "./CartItem.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useCartContext } from "../../context/cart-context";
const CartItem = ({ id, title, price, image, qty, discount, savedItem }) => {
  const {
    incrementItem,
    decrementItem,
    removeFromCart,
    saveForLater,
    moveBackToCart,
    removeFromSavedItems,
  } = useCartContext();
  return (
    <article className="cart-item">
      <div className="cart-item-details">
        <img src={image} alt={title} />
        <div className="info">
          <h5>{title}</h5>
          <p>Price : ₹ {(price * 70).toFixed(0)}</p>
          <p>Discount : ₹ {(discount * 70).toFixed(0)}</p>
        </div>
      </div>
      <div className="cart-actions">
        <div className="increment-decrement">
          {!savedItem && (
            <>
              <AiOutlineMinus
                onClick={() => decrementItem(id)}
                className="increment-decrement-icon"
              />
              {qty}
              <AiOutlinePlus
                onClick={() => incrementItem(id)}
                className="increment-decrement-icon"
              />
            </>
          )}
        </div>
        <div className="cart-btns">
          {!savedItem ? (
            <>
              <button className="btn" onClick={() => saveForLater(id)}>
                Save For Later
              </button>
              <button
                className="btn btn-delete"
                onClick={() => removeFromCart(id)}
              >
                Remove
              </button>
            </>
          ) : (
            <>
              <button className="btn" onClick={() => moveBackToCart(id)}>
                Move to Cart
              </button>
              <button
                className="btn btn-delete"
                onClick={() => removeFromSavedItems(id)}
              >
                Remove
              </button>
            </>
          )}
        </div>
      </div>
    </article>
  );
};

export default CartItem;
