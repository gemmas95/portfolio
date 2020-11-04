import React from "react";
import { Flip } from "react-awesome-reveal";

import { projectsList } from "../../data/projects.data";
import CardProject from "../../components/CardProject/CardProject";

import "./Projects.css";

function Projects() {
  return (
    <div className="pt-3 pb-3 bg__light" id="projects">
      <h1 className="text-center">Projects</h1>
      <div className="justify-content-center d-flex flex-wrap align-items-center">
        <Flip duration={1000} cascade direction="vertical">
          {projectsList.map((project: any, index) => {
            return <CardProject project={project} index={index} />;
          })}
        </Flip>
      </div>
    </div>
  );
}

export default Projects;
