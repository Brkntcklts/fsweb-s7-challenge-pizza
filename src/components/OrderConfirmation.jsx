import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/OrderConfirmation.css';
import pizzaImage from '../assets/pizzaaa.jpg'; 

const OrderConfirmation = () => {
  const history = useHistory();

  const handleGoHome = () => {
    history.push('/');
  };

  return (
    <div className="order-confirmation">
      <div className="order-confirmation__image-container">
        <img src={pizzaImage} alt="Delicious Pizza" className="order-confirmation__image" />
      </div>
      <div className="order-confirmation__text">
        <h2>Siparişiniz Alındı!</h2>
        <p>Siparişiniz başarıyla alındı. Afiyet olsun!</p>
        <button onClick={handleGoHome}>Ana Sayfaya Dön</button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
