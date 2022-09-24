import React from 'react';
import logo from '../../images/logo/logo.png';
import './Logo.css';

const Logo = (props) => {
  return (
    <img 
      className='logo' 
      src={logo} 
      alt="Лого" 
    />
  );
}

export default Logo;