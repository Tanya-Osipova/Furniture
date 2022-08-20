import React from 'react';
import './Footer.css';

function Footer(props) {
  return (
    <footer className='footer'>
      <p className='footer__copy'>&copy; Tanya Osipova</p>
      <small className='footer__date'>{new Date().getFullYear()}</small>
    </footer>
  );
}

export default Footer;