import React from "react";
import Particles from "react-particles-js";

//Components
import MyCarrousel from "../../components/MyCarrousel/MyCarrousel";
import TitleMessage from "../../components/TitleMessage/TitleMessage";

import "../../App.css";

function Header(particlesOptions: any) {
  return (
    <div className="mainContainer">
      <MyCarrousel />
      <Particles
        className="particles particles-box"
        params={particlesOptions}
      />
      <TitleMessage />
    </div>
  );
}

export default Header;
