import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo/logo.png';
import './PageNotFound.css';

function PageNotFound() {
  return (
    <div className="page-not-found">
      <div className='page-not-found__content'>
        <img className='page-not-found__logo' src={logo} alt="logo" />
        <p className='page-not-found__title'>404 - Страница не найдена</p>
        <Link className="page-not-found__link" to="/">
          Назад
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
