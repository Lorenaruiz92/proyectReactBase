import React from 'react'
import {useCart} from '../hooks/useCart';
import './PacksTravel.css'

const PacksTravel = ({ travel }) => {
  const { addToCart } = useCart();
  

  return (
    <div className='pack-card'>
      <div className="pack-image">
        <img src={travel.poster} alt={travel.name} />
      </div>
      <div className="pack-content">
        <h3>{travel.name}</h3>
        <p>{travel.days} Días</p>
        <p>Precio: {travel.price}</p>
        <button className="add-cart" onClick={() => {
          addToCart(travel);
          alert(`¡Has añadido ${travel.name} al carrito!`);
         }}
        >
         🛒 Añadir
        </button>
       </div>
    </div>
  );
};
    
  

export default PacksTravel