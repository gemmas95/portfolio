import React, { useContext } from "react";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import AccordionContext from "react-bootstrap/AccordionContext";
import Button from "react-bootstrap/Button";
import { projectsList } from "../../data/projects.data";

// import I_CALCULATOR from "../../assets/img/projects/previews/calculator_preview.png";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

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
  return (
    <div className="pt-3 pb-3" id="projects">
      <h1 className="text-center">Projects</h1>
      <div className="justify-content-center d-flex flex-wrap">
        {projectsList.map((project) => {
          return (
            <Accordion defaultActiveKey="1">
              <Card style={{ width: "25em" }} className="mb-2 m-5">
                <Card.Header className="text-center">
                  {project.title}
                </Card.Header>
                <Card.Img
                  variant="top"
                  height="200px"
                  src={project.imgSrc}
                  alt={project.imgAltText}
                />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
                <div className="d-flex justify-content-center mb-4">
                  <ContextAwareToggle eventKey="0">
                    Show more!
                  </ContextAwareToggle>
                </div>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    Hello! I'm the body
                    <a href={`${project.link}`}>
                      <Button className="m-2" variant="outline-success">
                        GitHub
                      </Button>
                    </a>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          );
        })}
        {/* <Card>
          <Card.Header>
            <ContextAwareToggle eventKey="1">Click me!</ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card> */}
      </div>
    </div>
  );
}

export default Projects;
