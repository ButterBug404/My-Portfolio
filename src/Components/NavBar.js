import { useState, useEffect, useRef } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/bb-logo1.png';
import { BrowserRouter as Router } from "react-router-dom";
import { useLanguage } from '../context/LanguageContext';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage, translations } = useLanguage();
  const hoverSoundRef = useRef(null);

  const playHoverSound = () => {
    if (hoverSoundRef.current) {
      hoverSoundRef.current.currentTime = 0;
      hoverSoundRef.current.play().catch(error => {
        console.log("Error al reproducir el audio:", error);
      });
    }
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js';
    script.type = 'module';
    document.body.appendChild(script);

    const script2 = document.createElement('script');
    script2.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js';
    script2.noModule = true;
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(script2);
    };
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link 
                href="#home" 
                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
                onClick={() => onUpdateActiveLink('home')}
                onMouseEnter={playHoverSound}
              >
                {translations.navbar.home[language]}
              </Nav.Link>
              <Nav.Link 
                href="#skills" 
                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} 
                onClick={() => onUpdateActiveLink('skills')}
                onMouseEnter={playHoverSound}
              >
                {translations.navbar.skills[language]}
              </Nav.Link>
              <Nav.Link 
                href="#projects" 
                className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} 
                onClick={() => onUpdateActiveLink('projects')}
                onMouseEnter={playHoverSound}
              >
                {translations.navbar.projects[language]}
              </Nav.Link>
              <Nav.Link 
                href="#aboutme" 
                className={activeLink === 'aboutme' ? 'active navbar-link' : 'navbar-link'} 
                onClick={() => onUpdateActiveLink('aboutme')}
                onMouseEnter={playHoverSound}
              >
                {translations.navbar.aboutme[language]}
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://dribbble.com/Butterbug404" target="_blank" rel="noopener noreferrer" onMouseEnter={playHoverSound}><ion-icon name="logo-dribbble"></ion-icon></a>
                <a href="https://www.linkedin.com/in/liz-sereno-13a7b6260/" target="_blank" rel="noopener noreferrer" onMouseEnter={playHoverSound}><ion-icon name="logo-linkedin"></ion-icon></a>
                <a href="https://github.com/ButterBug404" target="_blank" rel="noopener noreferrer" onMouseEnter={playHoverSound}><ion-icon name="logo-octocat"></ion-icon></a>
              </div>
              <button className="language-toggle" onClick={toggleLanguage} onMouseEnter={playHoverSound}>
                {language === 'es' ? 'ENG' : 'ESP'}
              </button>

            </span>
          </Navbar.Collapse>
        </Container>
        
        {/* Audio element for hover sound */}
        <audio ref={hoverSoundRef} preload="auto">
          <source src={require('../assets/1.mp3')} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </Navbar>
    </Router>
  )
}
