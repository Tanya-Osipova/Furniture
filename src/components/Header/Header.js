import React from 'react';
import { Link } from 'react-scroll';
import Nav from '../Nav/Nav';
import './Header.css';

function Header(props) {
  return (
    <header className='header'>
      <Nav />
      <div className="header__info">
        <div className='header__content'>
          <h1 className='header__title'>
            Kitchen furniture
          </h1>
          <p className='header__subtitle'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, aspernatur.
          </p>
          <Link 
            to='furniture-card-list'
            className='header__link'
            spy={true} 
            smooth={true}
            offset={-50} 
            duration={500}
          >
            Furniture
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;