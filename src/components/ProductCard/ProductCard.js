import React, { useState } from "react";
import { useCartContext } from "../../context/cart-context";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ id, title, price, image, discount }) => {
  const { addToCart } = useCartContext();
  const [addedToCart, setAddedToCart] = useState(false);
  return (
    <article className="product-card">
      <img src={image} alt={title} className="product-image" />

      <div className="product-info">
        <h5>{title}</h5>
        <p>Price : ₹{(price * 70).toFixed(0)}</p>
        {!addedToCart ? (
          <button
            className="btn"
            onClick={() => {
              addToCart({ id, title, price, image, discount });
              setAddedToCart(true);
            }}
          >
            Add To Cart
          </button>
        ) : (
          <Link className="btn cart-btn" to="/cart">
            Go To Cart
          </Link>
        )}
      </div>
    </article>
  );
};

export default ProductCard;
