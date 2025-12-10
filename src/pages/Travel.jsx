import React from 'react'
import './Travel.css'
import { useParams } from 'react-router-dom'
import { getTravel } from '../api/data'

const Travel = () => {
  const { id } = useParams();
  const travel = getTravel(id);

  if (!travel) return <p>Viaje no encontrado</p>;
  const { rating, reviews } = travel;

  return (
    <div className="travel-container">
      <h2>{travel.name}</h2>
      <p>{travel.days} días</p>
      <br />
      <p>Precio: {travel.price}</p>

      <h3>Valoración: {rating}⭐</h3>

      <div className="review-container">
        <h4>Reseñas de viajeros/as</h4>
        {reviews.map((reviews, index) => (
          <div key={index} className="review-card">
            <p className="review-author">{reviews.author}</p>
            <p className="review-comment">“{reviews.comment}”</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Travel;
