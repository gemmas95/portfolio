import React, { useContext } from "react";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import AccordionContext from "react-bootstrap/AccordionContext";
import Button from "react-bootstrap/Button";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import { IProject } from "../../common/project.model";

import "./CardProject.css";

// Toogle button logic
interface ContextToggleProps {
  children?: string;
  eventKey: string;
  callback?: any;
}

const ContextAwareToggle: React.FC<ContextToggleProps> = ({
  children,
  eventKey,
  callback,
}) => {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <button
      type="button"
      style={{
        backgroundColor: isCurrentEventKey ? "white" : "darkturquoise",
        // backgroundColor: isCurrentEventKey ? "white" : "palevioletred",

        color: isCurrentEventKey ? "black" : "white",
        border: "2px solid darkturquoise",
        // border: "2px solid palevioletred",

        borderRadius: 3,
      }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
};

// CardProject component logic
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
    <Accordion defaultActiveKey="1" key={index}>
      <Card style={{ maxWidth: "25em" }} className="focus mb-2 m-5 p-2">
        <Card.Header className="text-center">{project.title}</Card.Header>
        <Card.Img
          variant="top"
          height="200px"
          src={project.imgSrc}
          alt={project.imgAltText}
        />
        <Card.Body className="">
          <Card.Text>{project.description}</Card.Text>
        </Card.Body>
        <div className="d-flex justify-content-center mb-4">
          <ContextAwareToggle eventKey="0">Show more!</ContextAwareToggle>
        </div>
        <Accordion.Collapse eventKey="0" className="backgroung__color">
          <Card.Body>
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
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default CardProject;
