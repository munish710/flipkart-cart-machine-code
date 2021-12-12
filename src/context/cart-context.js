import React, { useContext, useState } from "react";
import CartItem from "../components/CartItem/CartItem";

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [savedItems, setSavedItems] = useState([]);

  const addToCart = (cartItem) => {
    debugger;
    const foundItem = cart.find((item) => item.id === cartItem.id);
    if (foundItem) {
      let newCart = cart.map((item) => {
        if (item.id === cartItem.id) {
          item.qty += 1;
        }
        return item;
      });
      setCart(newCart);
    } else {
      cart.push({ ...cartItem, qty: 1 });
      setCart(cart);
    }
  };

  const removeFromCart = (itemID) => {
    let newCart = cart.filter((item) => item.id !== itemID);
    setCart(newCart);
  };

  const incrementItem = (itemID) => {
    let newCart = cart.map((item) => {
      if (item.id === itemID) {
        item.qty += 1;
      }
      return item;
    });

    setCart(newCart);
  };

  const decrementItem = (itemID) => {
    let newCart = cart.map((item) => {
      if (item.id === itemID) {
        item.qty -= 1;
        if (item.qty < 0) {
          item.qty = 0;
        }
      }
      return item;
    });

    setCart(newCart);
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        savedItems,
        addToCart,
        removeFromCart,
        incrementItem,
        decrementItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};

export default CartProvider;
