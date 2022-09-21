import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Hamburger from '../Hamburger/Hamburger';
import Logo from '../Logo/Logo';
import logo from '../../images/logo/logo.png'
import './Nav.css';

function Nav(props) {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [fixedNav, setFixedNav] = useState(false);
  const windowHeight = 100;
  const currentScreenWidth = window.innerWidth;
  const screenWidth = 800;

  // add fixed nav
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= windowHeight) {
        setFixedNav(true);
      } else {
        setFixedNav(false);
      }
    });
  }, []);

  return (
    <nav className={fixedNav ? 'nav nav__fixed' : 'nav'}>
      <div 
        className={sidebarActive ? "nav__overlay nav__overlay_active" : "nav__overlay"}
        onClick={() => setSidebarActive(!sidebarActive)}
      >
      </div>
      <div className="nav__content">
        <Logo />
        <Hamburger 
          sidebarActive={sidebarActive}
          onClick={() => setSidebarActive(!sidebarActive)}
        />
        <ul className={sidebarActive ? 'nav__list nav__list_active' : 'nav__list'}>
          <li className='nav__item'>
            <Link 
              to="home"
              className="nav__link" 
              activeClass="nav__link_active"
              spy={true} 
              smooth={true}
              offset={-50} 
              duration={1000}
              onClick={() => setSidebarActive(!sidebarActive)}
            >
              {currentScreenWidth <= screenWidth ? 
                <img 
                  className='logo' 
                  src={logo} 
                  alt="logo" 
                />
                : `Главная`
              }
            </Link>
          </li>
          <li className='nav__item'>
            <Link
              to="furniture-card-list"
              className="nav__link" 
              activeClass="nav__link_active"
              spy={true} 
              smooth={true}
              offset={-50} 
              duration={1000}
              onClick={() => setSidebarActive(!sidebarActive)}
            >
              кухонная мебель
            </Link>
          </li>
          <li className='nav__item'>
            <Link
              to="contact"
              className="nav__link" 
              activeClass="nav__link_active"
              spy={true} 
              smooth={true}
              offset={-50} 
              duration={1000}
              onClick={() => setSidebarActive(!sidebarActive)}
            >
              Связаться
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;