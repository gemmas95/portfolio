import "./App.css";
import React from "react";
import Fade from "react-reveal/Fade";
// import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";

//Components
import MyNavbar from "./components/MyNavbar/MyNavbar";
import MyCarrousel from "./components/MyCarrousel/MyCarrousel";
import TitleMessage from "./components/TitleMessage/TitleMessage";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";

const App = () => {
  return (
    <div>
      <MyNavbar />
      <MyCarrousel />
      <TitleMessage />
      <div>
        {/*     <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        > */}
        <Container className="container-box rounded">
          <Fade duration={500}>
            <About />
          </Fade>
        </Container>
        {/* </Parallax> */}
      </div>
      <Skills />
      <Projects />
    </div>
  );
};

export default App;
