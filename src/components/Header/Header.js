import React from 'react';
import { Link } from 'react-scroll';
import { useSpring, animated } from 'react-spring';
import Nav from '../Nav/Nav';
import './Header.css';

function Header() {

  const HeaderAnim = useSpring({
    from: { opacity: 0, transform: 'translateY(-4rem)' },
    to: { opacity: 1, transform: 'translateY(0)' }, 
    delay: 500,
    config: {duration: 1000},
  })
  
  return (
    <header className='header' id='home'>
      <Nav />
      <animated.div style={HeaderAnim}>
          <div className="header__info">
          <div className='header__content'>
            <h1 className='header__title'>
              кухонная мебель
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
              кухонная мебель
            </Link>
          </div>
        </div>
      </animated.div>
    </header>
  );
}

export default Header;