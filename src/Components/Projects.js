import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg10 from "../assets/img/project-img10.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    // App
    {
      title: "Panadería Froggie",
      description: "App para celular, para la venta de productos de panadería con una tematica que te hará saltar a descargarla.",
      imgUrl: projImg1,
      category: "App",
      link: "https://snack.expo.dev/@papiroflexio/frogmodoro_proto"
    },
    {
      title: "Temperatura de Jalisco",
      description: "App para celular, por medio de la pagina web de la temperatura de Jalisco, para que puedas ver la temperatura en tiempo real.",
      imgUrl: projImg1,
      category: "App",
      link: "https://snack.expo.dev/@papiroflexio/panaderia-froggie-project?platform=android"
    },
    {
      title: "Frogmodoro",
      description: "Design & Development",
      imgUrl: projImg1,
      category: "App",
      link: "https://www.example.com"
    },

    // Web
    {
      title: "Popsicle or Ice-cream?",
      description: "Página web para una panadería ficticia llamada Froggie, con un diseño atractivo y funcional.",
      imgUrl: projImg4,
      category: "Web",
      link: "https://www.example.com"
    },
    {
      title: "Portfolio Personal",
      description: "Página web personal para mostrar mis proyectos y habilidades como desarrollador web.",
      imgUrl: projImg2,
      category: "Web",
      link: "https://www.example.com"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      category: "Web",
      link: "https://www.example.com"
    },

    // UX / UI
    {
      title: "Frogmodoro",
      description: "Propuesta de rediseño para una aplicación de gestión de tareas, mejorando la experiencia del usuario.",
      imgUrl: projImg1,
      category: "UX / UI",
      link: "https://www.example.com"
    },
    {
      title: "Portfolio Web",
      description: "Diseño de interfaz para un sitio web de comercio electrónico, enfocado en la usabilidad y estética.",
      imgUrl: projImg2,
      category: "UX / UI",
      link: "https://www.figma.com/design/TBPMW3XY0jOxrwmpRZhtl8/Portfolio?node-id=8-145&p=f&t=9I7c7qatb1Hz0dDr-0"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      category: "UX / UI",
      link: "https://www.example.com"
    },

    // neuronal network
    {
      title: "Popsicle or Ice-cream? [CNN]",
      description: "Red neuronal convolucional para clasificar imágenes en diferentes categorías con alta precisión.",
      imgUrl: projImg10,
      category: "neuronal network",
      link: "https://www.example.com"
    },
    {
      title: "Predicción de Series Temporales",
      description: "Modelo de red neuronal recurrente para predecir valores futuros en series temporales.",
      imgUrl: projImg10,
      category: "neuronal network",
      link: "https://www.example.com"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg10,
      category: "neuronal network",
      link: "https://www.example.com"
    },
  ];

  // Filtrar proyectos por categoría
  const getProjectsByCategory = (category) =>
    projects.filter(project => project.category === category);

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>aquí estan los proyecton que he realizado o he estado en parte para realizarlo.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item className="nav-item-custom">
                      <Nav.Link eventKey="first" className="nav-link-custom">App</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="nav-item-custom">
                      <Nav.Link eventKey="second" className="nav-link-custom">Web</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="nav-item-custom">
                      <Nav.Link eventKey="third" className="nav-link-custom">UX / UI</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="nav-item-custom">
                      <Nav.Link eventKey="fourth" className="nav-link-custom">neuronal network</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          getProjectsByCategory("App").map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          ))
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          getProjectsByCategory("Web").map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          ))
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          getProjectsByCategory("UX / UI").map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          ))
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <Row>
                        {
                          getProjectsByCategory("neuronal network").map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          ))
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
