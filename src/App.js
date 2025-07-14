import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./Components/NavBar";
import { Banner } from "./Components/Banner";
import { Skills } from "./Components/Skills";
import { Projects } from "./Components/Projects";
import { AboutMe } from "./Components/AboutMe";
import { Footer } from "./Components/Footer";
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        <AboutMe />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
