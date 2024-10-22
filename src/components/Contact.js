// src/components/Contact.js
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="my-5 py-4">
      <h2>{t('contact')}</h2>
      <Row>
        <Col md={6}>
          <p><FaPhone /> {t('phone')}: (47) 99660-4876</p>
          <p><FaEnvelope /> {t('email')}: vitorhugofallgatter@gmail.com</p>
        </Col>
        <Col md={6}>
          <p><FaGithub /> {t('github')}: <a href="https://github.com/vfallgatter">Clique aqui!</a></p>
          <p><FaLinkedin /> {t('linkedin')}: <a href="https://linkedin.com/in/vitorfallgatter">Clique aqui!</a></p>
        </Col>
      </Row>
    </section>
  );
}

export default Contact;
