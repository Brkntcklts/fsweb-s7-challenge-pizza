import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import pizzaImage from '../assets/pizzaa.jpg'; 


const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${pizzaImage})` }}>
      <div className="home__welcome-section">
        <h2 className="home__title">Hoş Geldiniz</h2>
        <p className="home__description">En lezzetli pizzaları sipariş edin!</p>
        <Link to="/order" className="home__order-button">Sipariş Ver</Link>
      </div>
      <div className="home__features">
        <div className="home__feature">
          <h3>Hızlı Teslimat</h3>
          <p>En hızlı teslimat garantisi ile sıcak ve taze pizzalar kapınızda!</p>
        </div>
        <div className="home__feature">
          <h3>Kolay Sipariş</h3>
          <p>Online sipariş verin, anında hazırlanıp kapınıza gelsin!</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
