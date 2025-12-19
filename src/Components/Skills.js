import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { useLanguage } from '../context/LanguageContext';

export const Skills = () => {
  const { language, translations } = useLanguage();

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="skill-bx wow zoomIn">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    
                        <h2>{translations.skills.title[language]}</h2>
                        <p>{translations.skills.description[language]}</p>
                        <h3>{translations.skills.softSkills.hardskills[language]}</h3>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>{translations.skills.webDevelopment[language]}</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>{translations.skills.brandIdentity[language]}</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>{translations.skills.logoDesign[language]}</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>{translations.skills.webDevelopment[language]}</h5>
                            </div>
                        </Carousel>
                        
                        {/* Soft Skills Section with Carousel */}
                        <div className="soft-skills-section mt-5">
                            <h3>{translations.skills.softSkills.title[language]}</h3>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider mt-4">
                                <div className="item">
                                    <img src={meter1} alt="Teamwork" />
                                    <h5>{translations.skills.softSkills.teamwork[language]}</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Communication" />
                                    <h5>{translations.skills.softSkills.communication[language]}</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Adaptability" />
                                    <h5>{translations.skills.softSkills.adaptability[language]}</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Problem Solving" />
                                    <h5>{translations.skills.softSkills.problemSolving[language]}</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
