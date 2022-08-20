import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import FurnitureCardList from '../FurnitureCardList/FurnitureCardList';
import Header from '../Header/Header';
import Title from '../Title/Title';
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton';

function Main(props) {
  return (
    <>
      <Header />
      <main>
        <Title id='furniture-card-list'>Our Kitchen Collection</Title>
        <FurnitureCardList />
        <Title id='contact'>Contact us</Title>
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default Main;