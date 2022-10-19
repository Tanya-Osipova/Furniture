import React from 'react';
import { Link } from 'react-router-dom';
import { useParams, useHistory } from "react-router-dom";
import { FaBackward } from "react-icons/fa";
import { useSpring, animated } from 'react-spring';
import data from '../../data';
import Logo from '../Logo/Logo';
import './Details.css';

const Details = (props) => {
  const {productId} = useParams()
  const thisProduct = data.find(prod => prod.id.toString() === productId);
  const history = useHistory();

  const cardAnim = useSpring({
    from: { opacity: 0, transform: 'translateY(-4rem)' },
    to: { opacity: 1, transform: 'translateY(0)' }, 
    delay: 300,
    config: {duration: 1000},
  })
  
  return (
    <animated.div style={cardAnim}>
    <section className='details'>
      <div className="details__button-container">
        <Link to='/'>
          <Logo />
        </Link>
        <button 
          type='button'
          className='details__back-button'
          onClick={() => history.goBack()}
        >
          <FaBackward className='details__back-icon' /> назад
        </button>
      </div>
      <div className='details__container'>
        <div className="details__image-container">
          <img className='details__image' src={thisProduct.image} alt={thisProduct.title} />
        </div>
        <div className='details__content'>
          <h2 className='details__title'>{thisProduct.title}</h2>
          <hr className='details__line' />
          <p className='details__detail'>&#8381; {thisProduct.price}</p>
          <p className='details__detail'>Цвет: {thisProduct.color}</p>
        </div>
      </div>
    </section>
    </animated.div>
  );
}


  

export default Details;