import React, { createContext, useState, useContext } from 'react';

// Create context
const LanguageContext = createContext();

// Context provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default to Spanish

  // Function to toggle language
  const toggleLanguage = () => {
    setLanguage(prevLanguage => prevLanguage === 'es' ? 'en' : 'es');
  };

  // Text translations object for the whole application
  const translations = {
    // NavBar translations
    navbar: {
      home: {
        es: 'Inicio',
        en: 'Home'
      },
      skills: {
        es: 'Skills',
        en: 'Skills'
      },
      projects: {
        es: 'Proyectos',
        en: 'Projects'
      },
      aboutme: {
        es: 'Sobre Mi',
        en: 'About Me'
      },
        contact: {
        es: 'Contacto',
        en: 'Contact'
      },

    },
    // Banner translations
    banner: {
        welcome: {
          es: 'Bienvenid@ a mi Portafolio',
          en: 'Welcome to my Portfolio'
        },
        intro: {
          es: '¡Hola! Soy ButterBug,',
          en: 'Hi! I\'m ButterBug,'
        },
        description: {
          es: 'Hola, soy Liz Sarahí. estoy a egresar de la universidad de ciencias exactas e ingenieras (CUCEI), estoy buscando un empleo que le agrade mis capacidades y actitudes que les pueda ofrecer.',
          en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
        },
        connect: {
          es: 'Conectémonos',
          en: 'Let\'s Connect'
        }
      },
    // Skills translations - Note the lowercase 's' in 'skills'
    skills: {
      title: {
        es: 'Habilidades',
        en: 'Skills'
      },
      description: {
        es: 'estos son las habilidades que he aprendido a lo largo de mi carrera y cursos, me gusta aprender algo nuevo cada día. tambien tengo softs skills que',
        en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.'
      },
      webDevelopment: {
        es: 'Python',
        en: 'Web Development'
      },
      brandIdentity: {
        es: 'Identidad de Marca',
        en: 'Brand Identity'
      },
      logoDesign: {
        es: 'Diseño de Logo',
        en: 'Logo Design'
      },
      softSkills: {
        title: {
          es: 'Habilidades Blandas',
          en: 'Soft Skills'
        },
          hardskills: {
            es: 'Habilidades Fuertes',
            en: 'Hard Skills'
          },
        teamwork: {
          es: 'Trabajo en Equipo',
          en: 'Teamwork'
        },
        communication: {
          es: 'Comunicación',
          en: 'Communication'
        },
        adaptability: {
          es: 'Adaptabilidad',
          en: 'Adaptability'
        },
        problemSolving: {
          es: 'Resolución de Problemas',
          en: 'Problem Solving'
        }
      }
    },
    // Projects translations
    projects: {
      title: {
        es: 'Proyectos',
        en: 'Projects'
      },
      description: {
        es: 'Estos son algunos de mis proyectos recientes. Cada proyecto refleja mi enfoque en crear soluciones de diseño que sean tanto funcionales como estéticamente agradables.',
        en: 'Here are some of my recent projects. Each project reflects my focus on creating design solutions that are both functional and aesthetically pleasing.'
      },
      tab1: {
        es: 'Pestaña 1',
        en: 'Tab 1'
      },
      tab2: {
        es: 'Pestaña 2',
        en: 'Tab 2'
      },
      tab3: {
        es: 'Pestaña 3',
        en: 'Tab 3'
      },
      projectTitle: {
        es: 'Título del Proyecto',
        en: 'Project Title'
      },
      shortDescription: {
        es: 'Breve descripción',
        en: 'Short Description'
      }
    }
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);
