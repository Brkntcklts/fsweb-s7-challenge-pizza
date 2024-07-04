import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">PizzaaTech</Link>
        <nav className="nav">
          <div className="nav-links">
            <Link to="/">Anasayfa</Link>
            
            <Link to="/menu">Menü</Link>
            <Link to="/about">Hakkımızda</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
