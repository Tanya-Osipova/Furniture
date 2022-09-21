import React,{ useState } from 'react';
import { FaForward } from "react-icons/fa";
import FurnitureCard from '../FurnitureCard/FurnitureCard';
import Button from '../Button/Button';
import data from '../../data';
import './FurnitureCardList.css';

function FurnitureCardList(props) {
  const [more, setMore] = useState(6);
  const moreCards = 3;

  const handleMore = () => {
    setMore((prevValue) => prevValue + moreCards);
  };
  const cards = data.slice(0, more).map(card => {
    return (
      <FurnitureCard 
        key={card.id}
        {...card}
      />
    )
  })

  return (
    <section className='card-wrapper'>
      <ul className='card__list'>
        {cards}
      </ul>

      {more < data.length && (
        <Button
          className="more-button"
          type="button"
          onClick={handleMore}
        >
          Больше <FaForward className='more-button__icon'/>
        </Button> 
      )}
    </section>
  );
}

export default FurnitureCardList;