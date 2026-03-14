import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
/*import projImg5 from "../assets/img/project-img5.png";*/
import projImg3 from "../assets/img/project-img3.png";
import projImg6 from "../assets/img/acb.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg7 from "../assets/img/Smartboole.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg10 from "../assets/img/project-img10.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import { useLanguage } from '../context/LanguageContext';

export const Projects = () => {
  const { language, translations } = useLanguage();
  const projectsText = translations.projects;

  const projects = [
    // App
    {
      title: projectsText.items.frogmodoroApp.title[language],
      description: projectsText.items.frogmodoroApp.description[language],
      imgUrl: projImg1,
      category: "App",
      link: "https://snack.expo.dev/@papiroflexio/frogmodoro_proto"
    },
    {
      title: projectsText.items.jaliscoWeather.title[language],
      description: projectsText.items.jaliscoWeather.description[language],
      imgUrl: projImg2,
      category: "App",
      link: "https://snack.expo.dev/@papiroflexio/clima-tarea?platform=android"
    },
    {
      title: projectsText.items.panaderiaFroggieApp.title[language],
      description: projectsText.items.panaderiaFroggieApp.description[language],
      imgUrl: projImg3,
      category: "App",
      link: "https://snack.expo.dev/@papiroflexio/panaderia-froggie-project?platform=android"
    },

    // Web
    {
      title: projectsText.items.popsicleWeb.title[language],
      description: projectsText.items.popsicleWeb.description[language],
      imgUrl: projImg4,
      category: "Web",
      link: "https://butterbug404.github.io/CNN-Popsicle-or-Ice-Cream/"
    },
    {
      title: projectsText.items.personalPortfolioWeb.title[language],
      description: projectsText.items.personalPortfolioWeb.description[language],
      imgUrl: projImg6,
      category: "Web",
      link: "https://www.example.com"
    },
    {/*{
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      category: "Web",
      link: "https://www.example.com"
    },*/},

    // UX / UI
    {
      title: projectsText.items.frogmodoroUx.title[language],
      description: projectsText.items.frogmodoroUx.description[language],
      imgUrl: projImg8,
      category: "UX / UI",
      link: "https://www.figma.com/design/8GMCOij0PQchdiBeNpq8Hy/Frogmodoro?node-id=63-169&p=f&t=ipXdmE3m5LF2Ua9K-0"
    },
    {
      title: projectsText.items.smartbooleUx.title[language],
      description: projectsText.items.smartbooleUx.description[language],
      imgUrl: projImg7,
      category: "UX / UI",
      link: "https://www.figma.com/design/y0pKaqg2hUdYg4W7AtZKoK/Assignment---UX-UI-Designer---Nblik--Community-?node-id=0-1&t=Yg1wGRMOBjbrCxcR-1"
    },
    {
      title: projectsText.items.personalPortfolioUx.title[language],
      description: projectsText.items.personalPortfolioUx.description[language],
      imgUrl: projImg6,
      category: "UX / UI",
      link: "https://www.figma.com/design/TBPMW3XY0jOxrwmpRZhtl8/Portfolio?node-id=8-145&p=f&t=9I7c7qatb1Hz0dDr-0"
    },

    // neuronal network
    {
      title: projectsText.items.cnnProject.title[language],
      description: projectsText.items.cnnProject.description[language],
      imgUrl: projImg10,
      category: "neuronal network",
      link: "https://colab.research.google.com/drive/1XSeivzKu2UHafv07Fsuv1j1jqcrtTR1b"
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
            <h2>{projectsText.title[language]}</h2>
            <p>{projectsText.description[language]}</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item className="nav-item-custom">
                  <Nav.Link eventKey="first" className="nav-link-custom">{projectsText.tab1[language]}</Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item-custom">
                  <Nav.Link eventKey="second" className="nav-link-custom">{projectsText.tab2[language]}</Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item-custom">
                  <Nav.Link eventKey="third" className="nav-link-custom">{projectsText.tab3[language]}</Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item-custom">
                  <Nav.Link eventKey="fourth" className="nav-link-custom">{projectsText.tab4[language]}</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content id="slideInUp">
                    <Tab.Pane eventKey="first">
                      <Row className="justify-content-center">
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
                      <Row className="justify-content-center">
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
                      <Row className="justify-content-center">
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
                      <Row className="justify-content-center">
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
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
