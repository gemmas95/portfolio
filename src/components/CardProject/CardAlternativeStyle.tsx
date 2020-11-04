import React, { useContext } from "react";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import AccordionContext from "react-bootstrap/AccordionContext";
import Button from "react-bootstrap/Button";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import "./CardAlternativeStyle.css";

function ContextAwareToggle({ children, eventKey, callback }: any) {
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
        backgroundColor: isCurrentEventKey ? "white" : "palevioletred",
        color: isCurrentEventKey ? "black" : "white",
        border: "2px solid palevioletred",
        borderRadius: 3,
      }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

const CardProject = ({ project, index }: any) => {
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
    <Accordion defaultActiveKey="1" key={index} className="maincardstyle">
      <Card style={{ maxWidth: "25em" }} className="cardstyle">
        <div className="contentstyle">
          <div
            className="backgroundImage"
            style={{
              backgroundImage: `${project.imgAltText}`,
            }}
          ></div>
          {/* <img src={project.imgSrc} alt={project.imgAltText} /> */}
          <div className="h2titlestyle">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
          <div className="hoverdisplay">
            <div>
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
            </div>
            <div className="buttonbtnstyle">
              {Object.keys(project.links).map((key, i) => {
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
    </Accordion>
  );
};

export default CardProject;
