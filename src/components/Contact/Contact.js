import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => (
  <section className='contact'>
    <div className="contact__text-container">
      <p className='contact__subtitle'>
        По всем интересующим вас вопросам вы всегда можете обратиться по указанным телефонам
        или написать на почту.
      </p>
    </div>
    <ul className="contact__list">
      <li className='contact__item'>
        <p className='contact__icon'><FaEnvelope /></p>
        <p className='conatct__data'>email@email.com</p>
      </li>
      <li className='contact__item contact__item_center'>
        <p className='contact__icon'><FaMapMarkerAlt /></p>
        <p className='conatct__data'>местонахождение</p>
      </li>
      <li className='contact__item'>
        <p className='contact__icon'><FaPhoneAlt /></p>
        <p className='conatct__data'>546777778</p>
      </li>
    </ul>
  </section>
);

export default Contact;