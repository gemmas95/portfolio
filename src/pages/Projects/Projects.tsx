import React from "react";
import { Flip } from "react-awesome-reveal";

import { projectsList } from "../../data/projects.data";
import CardProject from "../../components/CardProject/CardProject";
import CardAlternativeStyle from "../../components/CardProject/CardAlternativeStyle";
import { IProject } from "../../common/project.model";

import "./Projects.css";

function Projects() {
  return (
    <div className="pt-3 pb-3 bg__light" id="projects">
      <h1 className="text-center">Projects</h1>
      <div className="justify-content-center d-flex flex-wrap align-items-center">
        <Flip duration={1000} cascade direction="vertical">
          {projectsList.map((project: IProject, index: number) => {
            return <CardProject project={project} index={index} />;
          })}
        </Flip>
      </div>
    </div>
  );
}

export default Projects;
