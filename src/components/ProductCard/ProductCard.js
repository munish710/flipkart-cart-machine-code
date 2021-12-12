import React from "react";
import { useCartContext } from "../../context/cart-context";
import "./ProductCard.css";

const ProductCard = ({ id, title, price, image, discount }) => {
  const { addToCart } = useCartContext();
  return (
    <article className="product-card">
      <img src={image} alt={title} className="product-image" />

      <div className="product-info">
        <h5>{title}</h5>
        <p>Price : ₹{(price * 70).toFixed(0)}</p>
        <button
          className="btn"
          onClick={() => addToCart({ id, title, price, image, discount })}
        >
          Add To Cart
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
