import React from 'react';
import { Link } from 'react-router-dom';
import './FurnitureCard.css'

function FurnitureCard(props) {
  return (
    <Link to={`/details/${props.id}`}>
      <li className='card'>
        <img className='card__image' src={props.image} alt={props.title} />
        <span className='card__link'>
          узнать больше
        </span> 
        <div className="card__info">
          <h2 className='card__title'>{props.title}</h2>
          <p className='card__price'>&#8381; {props.price}</p>
        </div>
      </li>
    </Link>
  );
}

export default FurnitureCard;