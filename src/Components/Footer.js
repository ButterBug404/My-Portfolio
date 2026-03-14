import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/bb-logo1.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6}>
            <img className="imglogo" src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon-footer">
                <a href="https://dribbble.com/Butterbug404" target="_blank" rel="noopener noreferrer"><ion-icon name="logo-dribbble"></ion-icon></a>
                <a href="https://www.linkedin.com/in/liz-sereno-13a7b6260/" target="_blank" rel="noopener noreferrer"><ion-icon name="logo-linkedin"></ion-icon></a>
                <a href="https://github.com/ButterBug404" target="_blank" rel="noopener noreferrer"><ion-icon name="logo-octocat"></ion-icon></a>
              </div>
            {/*<p>Copyright 2022. All Rights Reserved</p>*/}
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
