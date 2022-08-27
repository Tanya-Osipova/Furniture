import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import data from '../../data';
import './Details.css';

function Details(props) {
  const {productId} = useParams()
  const thisProduct = data.find(prod => prod.id.toString() === productId);

  return (
    <section className='details'>
      <div className="details__link-container">
        <Link className='details__link' to='/'>
          назад
        </Link>
      </div>
      <div className='details__container'>
        <img className='details__image' src={thisProduct.image} alt="img" />
        <div className='details__content'>
          <h2 className='details__title'>{thisProduct.title}</h2>
          <hr className='details__line' />
          <p className='details__detail'>&#8381; {thisProduct.price}</p>
        </div>
      </div>
    </section>
  );
}


  

export default Details;