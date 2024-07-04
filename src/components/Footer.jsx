import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>© 2024 Teknolojik Yemekler. Tüm hakları saklıdır.</p>
        <p>
          <a href="/about">Hakkımızda</a> | <a href="/contact">İletişim</a> | <a href="/privacy">Gizlilik Politikası</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
