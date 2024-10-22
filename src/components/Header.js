import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import Flag from 'react-world-flags';
import { useTranslation } from 'react-i18next';

const Header = ({ isEnglish, onToggleLanguage }) => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (codigo, idiomaI18n) => {
    i18n.changeLanguage(idiomaI18n); 
    onToggleLanguage(idiomaI18n === 'en'); 
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home" style={{ marginLeft: '10px' }}>
          Vitor Hugo Ittner Fallgatter
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">{t('home')}</Nav.Link>
            <Nav.Link href="#about">{t('about')}</Nav.Link>
            <Nav.Link href="#projects">{t('projects')}</Nav.Link>
            <Nav.Link href="#contact">{t('contact')}</Nav.Link>
          </Nav>

          <Nav>
            <NavDropdown
              title={
                <span>
                  <Flag
                    code={isEnglish ? 'US' : 'BR'}
                    style={{ width: '32px', height: '24px', marginRight: '8px' }}
                  />
                  {t('Language')}
                </span>
              }
              id="language-dropdown"
            >
              <NavDropdown.Item onClick={() => handleLanguageChange('BR', 'pt')}>
                <Flag code="BR" style={{ width: '24px', height: '18px', marginRight: '8px' }} />
                Português
              </NavDropdown.Item>

              <NavDropdown.Item onClick={() => handleLanguageChange('US', 'en')}>
                <Flag code="US" style={{ width: '24px', height: '18px', marginRight: '8px' }} />
                English
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
