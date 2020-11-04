import React from "react";
import { Flip } from "react-awesome-reveal";

import { projectsList } from "../../data/projects.data";
import CardProject from "../../components/CardProject/CardProject";
import CardAlternativeStyle from "../../components/CardProject/CardAlternativeStyle";
import { IProject } from "../../common/project.model";

import styled from "styled-components";

const Div = styled.div`
  background: linear-gradient(
    rgba(239, 240, 240, 1) 0%,
    rgba(239, 240, 240, 1) 87%,
    rgba(255, 255, 255, 1) 100%
  );
  padding-bottom: 1rem;
  padding-top: 1rem;
`;

function Projects() {
  return (
    <Div id="projects">
      <h1 className="text-center">Projects</h1>
      <div className="justify-content-center d-flex flex-wrap align-items-center">
        <Flip duration={1000} cascade direction="vertical">
          {projectsList.map((project: IProject, index: number) => {
            return <CardProject project={project} index={index} />;
          })}
        </Flip>
      </div>
    </Div>
  );
}

export default Projects;
