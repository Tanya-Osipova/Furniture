import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import logo from '../../images/logo/logo.png'
import Hamburger from '../Hamburger/Hamburger';
import './Nav.css';

function Nav() {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [fixedNav, setFixedNav] = useState(false);

  // lock body when sidebar is open
  // useEffect(() => {
  //   if (sidebarActive) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "unset";
  //   }
  // }, [sidebarActive]);

  // add fixed nav
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 100) {
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
        <Link to="/">
          <img className='nav__logo' src={logo} alt="logo" />
        </Link>
        <Hamburger 
          sidebarActive={sidebarActive}
          onClick={() => setSidebarActive(!sidebarActive)}
        />
        <ul className={sidebarActive ? 'nav__list nav__list_active' : 'nav__list'}>
          <li className='nav__item'>
            <Link
              to="furniture-card-list"
              className="nav__link" 
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