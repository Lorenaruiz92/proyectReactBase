import React from "react";
import { useCart } from "../hooks/useCart";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart, buyTravel } = useCart();

  return (
    <div className="cart-page">
      <h2>Viajes añadidos</h2>

      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <div className="cart-items">
          {cart.map((travel) => (
            <div key={travel.id}>
              <img src={travel.poster} alt={travel.name} />
              <div className="cart-info">
                <h4>{travel.name}</h4>
                <p>{travel.days} Días</p>
                <p>Precio: {travel.price}</p>

                <button onClick={() => removeFromCart(travel.id)}>
                  Eliminar
                </button>

                <br />

                <button onClick={() => buyTravel(travel)}>
                  Comprar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <br />
      <Link to="/travels">Volver a viajes</Link>
    </div>
  );
};

export default Cart;
