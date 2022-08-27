import React from 'react';
import { Link } from 'react-router-dom';
import './FurnitureCard.css'

function FurnitureCard(props) {
  return (
    <li className='card'>
      <img className='card__image' src={props.image} alt={props.title} />
      <Link to={`/details/${props.id}`} className='card__link'>
        узнать больше
      </Link>
      <div className="card__info">
        <h2 className='card__title'>{props.title}</h2>
        <p className='card__price'>&#8381; {props.price}</p>
      </div>
    </li>
  );
}

export default FurnitureCard;