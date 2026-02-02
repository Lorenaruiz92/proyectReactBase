import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const useCart = () => {
  const { cart, setCart } = useContext(CartContext);

  const addToCart = (travel) => {
    setCart(prev => {
      if (prev.find(item => item.id === travel.id)) return prev;
      return [...prev, travel];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const buyTravel = (travel) => {
    alert(`¡Genial, compraste: ${travel.name}, disfruta tu viaje!`);
    removeFromCart(travel.id);
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    buyTravel
  };
};
