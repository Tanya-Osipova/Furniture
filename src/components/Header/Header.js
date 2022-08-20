import React from 'react';
import { Link } from 'react-scroll';
import { useSpring, animated } from 'react-spring';
import Nav from '../Nav/Nav';
import './Header.css';

function Header() {

  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(-4rem)' },
    to: { opacity: 1, transform: 'translateY(0)' }, 
    delay: 500,
    config: {duration: 1000},
  })
  
  return (
    <header className='header'>
      <Nav />
      <animated.div style={props}>
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
      </animated.div>
    </header>
  );
}

export default Header;