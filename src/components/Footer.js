// src/components/Footer.js
import React from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-dark text-white py-4">
      <Container className="text-center">
        <p>{t('follow_me')}</p>
        <a href="https://github.com/vfallgatter" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/vitorfallgatter/" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
          LinkedIn
        </a>
      </Container>
    </footer>
  );
};

export default Footer;
