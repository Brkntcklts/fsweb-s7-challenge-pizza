import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Teknolojik Yemekler</h1>
      <nav>
        <a href="/">Anasayfa</a>
        <a href="/order">Sipariş Ver</a>
        </nav>
    </header>
  );
};

export default Header;
