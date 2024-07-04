import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <h2>Hoş Geldiniz</h2>
      <p>En lezzetli pizzaları sipariş edin!</p>
      <a href="/order" className="order-button">Sipariş Ver</a>
    </div>
  );
};

export default Home;
