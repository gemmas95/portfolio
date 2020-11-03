import React, { useContext } from "react";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import AccordionContext from "react-bootstrap/AccordionContext";
import Button from "react-bootstrap/Button";
import { projectsList } from "../../data/projects.data";
import Fade from "react-reveal/Fade";

// import I_CALCULATOR from "../../assets/img/projects/previews/calculator_preview.png";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import "./Projects.css";

function ContextAwareToggle({ children, eventKey, callback }) {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <button
      type="button"
      style={{ backgroundColor: isCurrentEventKey ? "pink" : "lavender" }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}
function Projects() {
  let randomColor;
  function getColor(nameLink) {
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
    <div className="pt-3 pb-3 bg__light" id="projects">
      <h1 className="text-center">Projects</h1>
      <div className="justify-content-center d-flex flex-wrap align-items-center">
        <Fade left cascade>
          {projectsList.map((project, index) => {
            return (
              <Accordion defaultActiveKey="1" key={index}>
                <Card
                  style={{ "max-width": "25em" }}
                  className="focus mb-2 m-5 p-2"
                >
                  <Card.Header className="text-center">
                    {project.title}
                  </Card.Header>
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
                    <ContextAwareToggle eventKey="0">
                      Show more!
                    </ContextAwareToggle>
                  </div>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <span className="bold">Tech Stack:</span>
                      <ul className="p-1 d-flex justify-content-center align-items-center flex-wrap">
                        {project.tech_stack.map((tech, index) => {
                          return (
                            <li className="list_no_dot" key={`tech_${index}`}>
                              <img
                                src={tech}
                                alt="tech"
                                className="little_logo"
                              />
                            </li>
                          );
                        })}
                      </ul>
                      <div className="d-flex justify-content-center">
                        {Object.keys(project.links).map((key, i) => {
                          getColor(key);
                          return (
                            <a href={`${project.links[key]}`} key={i}>
                              <Button
                                className="m-2"
                                variant={`outline-${randomColor}`}
                              >
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
          })}
        </Fade>
      </div>
    </div>
  );
}

export default Projects;
