import React from 'react';
import styles from './styles/Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>
        © {currentYear} Smart Expense Manager. All rights reserved.
      </p>
      <div className={styles.links}>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-service">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;
