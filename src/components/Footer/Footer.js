import React from 'react';
import './Footer.css';

function Footer(props) {
  return (
    <footer className='footer'>
      <p className='footer__copy'>&copy; Tanya Osipova. <span className='footer__date'>{new Date().getFullYear()}</span></p>
    </footer>
  );
}

export default Footer;