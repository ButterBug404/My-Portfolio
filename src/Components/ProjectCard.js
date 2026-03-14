import { Col } from "react-bootstrap";
import { useRef } from "react";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
    const hoverSoundRef = useRef(null);

    const playHoverSound = () => {
        if (hoverSoundRef.current) {
            hoverSoundRef.current.currentTime = 0; // Reinicia el audio desde el inicio
            hoverSoundRef.current.play().catch(error => {
                console.log("Error al reproducir el audio:", error);
            });
        }
    };

  return (
    <Col size={12} sm={6} md={4}>
      <div style={{ textDecoration: "none" }}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            
            <span>{description}</span>
          </div>
        </div>
      </div>

      <h4 style={{ textAlign: 'center', marginTop: '10px' }}>{title}</h4>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="project-btn" 
          style={{ textDecoration: 'none' }}
          onMouseEnter={playHoverSound}
        >
          Ver Codigo fuente
        </a>
      </div>

      {/* Audio button*/}
      <audio ref={hoverSoundRef} preload="auto">
        <source src={require('../assets/1.mp3')} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </Col>
  )
}
