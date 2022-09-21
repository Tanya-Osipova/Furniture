import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo/logo.png';
import './Logo.css';

const Logo = (props) => {
  return (
    <Link to="/">
      <img 
        className='logo' 
        src={logo} 
        alt="logo" 
      />
    </Link>
  );
}

export default Logo;