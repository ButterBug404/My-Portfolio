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
        es: 'Habilidades',
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
          es: 'Hola, soy Liz Sarahí. recien egresé de la universidad de ciencias exactas e ingenieras (CUCEI), estoy buscando un empleo que le agrade mis capacidades y actitudes que les pueda ofrecer.',
          en: 'Hello, I\'m Liz Sarahí. I recently graduated from the University of Exact Sciences and Engineering (CUCEI), and I am looking for a job that appreciates my skills and attitudes that I can offer.'
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
        es: 'Estas son las habilidades que he desarrollado en mi carrera y en cursos complementarios. Disfruto aprender nuevas herramientas y mejorar constantemente mis procesos de trabajo.',
        en: 'These are the skills I have developed through my degree and additional courses. I enjoy learning new tools and continuously improving how I work.'
      },
      webDevelopment: {
        es: 'Desarrollo Web',
        en: 'Web Development'
      },
      appDevelopment: {
        es: 'Desarrollo de Apps',
        en: 'App Development'
      },
      ilustration: {
        es: 'Ilustración',
        en: 'Illustration'
      },
      ChDesign: {
        es: 'Diseño de Personajes',
        en: 'Character Design'
      },
      UXnUI: {
        es: 'Diseño UXUI',
        en: 'UXUI Design'
      },
      CNN: {
        es: 'Redes Neuronales Convolucionales',
        en: 'Convolutional Neural Networks'
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
        es: 'Estos son algunos proyectos en los que he trabajado. Incluyen aplicaciones, desarrollo web, diseño UX/UI y experimentos con redes neuronales convolucionales.',
        en: 'These are some projects I have worked on. They include mobile apps, web development, UX/UI design, and convolutional neural network experiments.'
      },
      tab1: {
        es: 'Aplicaciones',
        en: 'Apps'
      },
      tab2: {
        es: 'Web',
        en: 'Web'
      },
      tab3: {
        es: 'UX / UI',
        en: 'UX / UI'
      },
      tab4: {
        es: 'CNN',
        en: 'CNN'
      },
      projectTitle: {
        es: 'Nombre del proyecto',
        en: 'Project name'
      },
      shortDescription: {
        es: 'Descripción breve del proyecto',
        en: 'Short project description'
      },
      items: {
        frogmodoroApp: {
          title: {
            es: 'Frogmodoro',
            en: 'Frogmodoro'
          },
          description: {
            es: 'Aplicación móvil para la venta de productos de panadería con una temática divertida inspirada en ranas.',
            en: 'Mobile app for selling bakery products with a fun frog-inspired theme.'
          }
        },
        jaliscoWeather: {
          title: {
            es: 'Temperatura de Jalisco',
            en: 'Jalisco Weather'
          },
          description: {
            es: 'Aplicación móvil para consultar en tiempo real la temperatura en Jalisco desde una fuente web.',
            en: 'Mobile app to check Jalisco temperature in real time from a web source.'
          }
        },
        panaderiaFroggieApp: {
          title: {
            es: 'Panadería Froggie',
            en: 'Froggie Bakery'
          },
          description: {
            es: 'Aplicación móvil orientada a mostrar productos de panadería y facilitar su visualización.',
            en: 'Mobile app focused on showcasing bakery products and improving product browsing.'
          }
        },
        popsicleWeb: {
          title: {
            es: 'Popsicle or Ice-cream?',
            en: 'Popsicle or Ice-cream?'
          },
          description: {
            es: 'Sitio web para una panadería ficticia llamada Froggie con una propuesta visual atractiva y funcional.',
            en: 'Website for a fictional bakery called Froggie with an attractive and functional visual proposal.'
          }
        },
        personalPortfolioWeb: {
          title: {
            es: 'Portafolio Personal',
            en: 'Personal Portfolio'
          },
          description: {
            es: 'Sitio web personal para presentar proyectos, habilidades y experiencia en desarrollo.',
            en: 'Personal website to showcase projects, skills, and development experience.'
          }
        },
        frogmodoroUx: {
          title: {
            es: 'Frogmodoro',
            en: 'Frogmodoro'
          },
          description: {
            es: 'Propuesta de rediseño UX/UI para mejorar la experiencia de uso en una app de gestión de tareas.',
            en: 'UX/UI redesign proposal to improve usability in a task management app.'
          }
        },
        smartbooleUx: {
          title: {
            es: 'Smartboole',
            en: 'Smartboole'
          },
          description: {
            es: 'Diseño de interfaz para e-commerce centrado en claridad visual, navegación y usabilidad.',
            en: 'E-commerce interface design focused on visual clarity, navigation, and usability.'
          }
        },
        personalPortfolioUx: {
          title: {
            es: 'Portafolio Personal',
            en: 'Personal Portfolio'
          },
          description: {
            es: 'Diseño UX/UI del portafolio personal con enfoque en identidad visual y jerarquía de contenido.',
            en: 'UX/UI design of the personal portfolio focused on visual identity and content hierarchy.'
          }
        },
        cnnProject: {
          title: {
            es: 'Popsicle or Ice-cream? [CNN]',
            en: 'Popsicle or Ice-cream? [CNN]'
          },
          description: {
            es: 'Proyecto de red neuronal convolucional para clasificar imágenes en diferentes categorías con alta precisión.',
            en: 'Convolutional neural network project to classify images into different categories with high accuracy.'
          }
        }
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
