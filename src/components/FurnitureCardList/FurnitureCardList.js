import React from 'react';
import FurnitureCard from '../FurnitureCard/FurnitureCard';
import data from '../../data';
import './FurnitureCardList.css';

function FurnitureCardList(props) {
  const cards = data.map(item => {
    return (
      <FurnitureCard 
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <section>
      <ul className='card__list'>
        {cards}
      </ul>
    </section>
  );
}

export default FurnitureCardList;