import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.gif";
import { useLanguage } from '../context/LanguageContext';

export const AboutMe = () => {
  const { language, translations } = useLanguage();

  return (
    <section className="contact" id="aboutme">
      <Container><div className="about-me-content-box">
        <Row className="align-items-center">
          <Col size={12} md={6}>
              <img src={headerImg} alt="Header Img" />
          </Col>
          <Col size={12} md={6}>
            <div className="about-me2-content-box">
              <h2>About me</h2>
              <p>{translations.banner.description[language]}</p>
            </div>
          </Col>
        </Row></div>
      </Container>
    </section>
  )
}
