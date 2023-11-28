import React, { createContext, useState } from "react";
export const CartContext = createContext();
const CartStore = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    const selectedProduct = cart.find((item) => item.id === product.id);
    if (selectedProduct) {
      selectedProduct.quantity = selectedProduct.quantity + 1;
    } else {
      const newProduct = {
        ...product,
        quantity: 1,
        position: cart.length,
      };
      setCart([...cart, newProduct]);
    }
  };
  const removeFromCart = (id) => {
    const filterCart = cart.filter((item) => item.id !== id);
    setCart(filterCart);
  };
  const updateQuantity = (product, value) => {
    const selectedProduct = cart.find((item) => item.id === product.id);
    const updateItem = {
      ...selectedProduct,
      quantity: selectedProduct.quantity + value,
    };
  };
  const value = {
    cart,
    setCart,
    addToCart,
    removeFromCart,
    updateQuantity,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartStore;
