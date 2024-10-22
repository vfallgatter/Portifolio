import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './i18n/i18n'; // Adicione esta linha
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [isEnglish, setIsEnglish] = useState(false); // Estado do idioma

  const toggleLanguage = (language) => {
    setIsEnglish(language); // Atualiza o idioma no estado global
  };

  return (
    <div className="App">
      <Header onToggleLanguage={toggleLanguage} isEnglish={isEnglish} />
      <About isEnglish={isEnglish} />
      <Projects isEnglish={isEnglish} />
      <Contact isEnglish={isEnglish} />
      <Footer />
    </div>
  );
}

export default App;
