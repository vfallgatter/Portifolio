// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "home": "Home",
          "about": "About",
          "projects": "Projects",
          "portfolio": "Visit Portfolio",
          "certificates": "Certificates",
          "contact": "Contact",
          "phone": "Phone",
          "email": "Email",
          "github": "GitHub",
          "linkedin": "LinkedIn",
          "follow_me": "Follow me on social media",
          "project_description_academic": "Area for academic projects.",
          "project_description_flutter": "Area for Flutter projects.",
          "project_description_frontend": "Area for Front-End projects."
        }
      },
      pt: {
        translation: {
          "home": "Início",
          "about": "Sobre",
          "projects": "Projetos",
          "portfolio": "Visitar Portfólio",
          "certificates": "Certificados",
          "contact": "Contato",
          "phone": "Telefone",
          "email": "Email",
          "github": "GitHub",
          "linkedin": "LinkedIn",
          "follow_me": "Siga-me nas redes sociais",
          "project_description_academic": "Área destinada para projetos acadêmicos.",
          "project_description_flutter": "Área destinada para projetos Flutter.",
          "project_description_frontend": "Área destinada para projetos Front-End."
        }
      },
    },
    lng: "pt", 
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
