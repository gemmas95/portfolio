import React from "react";
import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";

import { IProject } from "../../common/project.model";

import "./CardProject.css";

interface CardProps {
  project: IProject;
  index: number;
}

const CardProject: React.FC<CardProps> = ({ project, index }) => {
  let randomColor: string;

  function getColor(nameLink: string) {
    switch (nameLink) {
      case "GitHub":
        randomColor = "dark";
        break;
      case "Watch Video":
        randomColor = "primary";
        break;
      case "Testing":
        randomColor = "success";
        break;
      case "Live Demo":
        randomColor = "danger";
        break;
      default:
        randomColor = "info";
        break;
    }
  }
  return (
    <div className="flip-card" key={index}>
      <Card
        style={{ width: "25em", height: "25em" }}
        className="flip-card-inner focus"
      >
        <div className="flip-card-front">
          <h3 className="text-center">{project.title}</h3>
          <img height="200px" src={project.imgSrc} alt={project.imgAltText} />
          <div className="">
            <p>{project.description}</p>
          </div>
        </div>
        <div className="flip-card-back">
          <div className="align-items-center">
            <span className="bold">Tech Stack:</span>
            <ul className="p-1 d-flex justify-content-center align-items-center flex-wrap">
              {project.tech_stack.map((tech: any, index: number) => {
                return (
                  <li className="list_no_dot" key={`tech_${index}`}>
                    <img src={tech} alt="tech" className="little_logo" />
                  </li>
                );
              })}
            </ul>
            <div className="d-flex justify-content-center">
              {Object.keys(project.links).map((key: string, i: number) => {
                getColor(key);
                return (
                  <a href={`${project.links[key]}`} key={i}>
                    <Button className="m-2" variant={`outline-${randomColor}`}>
                      {key}
                    </Button>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CardProject;
