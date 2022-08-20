import React from 'react';
import './FurnitureCard.css'

function FurnitureCard(props) {
  return (
    <li className='card'>
      <img className='card__image' src={props.image} alt={props.title} />
      <a  className='card__link'>link</a>
      <div className="card__info">
        <h2 className='card__title'>{props.title}</h2>
        <p className='card__price'>&#8381; {props.price}</p>
      </div>
    </li>
  );
}

export default FurnitureCard;