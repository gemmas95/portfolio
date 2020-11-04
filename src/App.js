import "./App.css";
import React from "react";
import { Fade } from "react-awesome-reveal";

// import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";
import Particles from "react-particles-js";

import { particlesOptions } from "./particlesOptions";
//Components
import MyNavbar from "./components/MyNavbar/MyNavbar";
import MyCarrousel from "./components/MyCarrousel/MyCarrousel";
import TitleMessage from "./components/TitleMessage/TitleMessage";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import ContactForm from "./pages/Contact/ContactForm";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="mainContainer">
      <MyNavbar />
      <MyCarrousel />
      <Particles
        className="particles particles-box"
        params={particlesOptions}
      />
      <TitleMessage />
      <div>
        <Container className="container-box rounded">
          <Fade duration={2000}>
            <About />
          </Fade>
        </Container>
        {/* </Parallax> */}
      </div>
      <Skills />

      <Projects />
      <hr />
      <Container className="container-box rounded">
        <ContactForm />
      </Container>
      <Footer />
    </div>
  );
};

export default App;
