import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import { skills } from "../../data/skills.data";
import "./Skills.css";

import { ISkill } from "../../common/skills.model";

const Skills: React.FC = () => {
  return (
    <div className="pt-3 pb-3 bg__blue" id="skills">
      <h1 className="text-center font-details-b pb-4 white__title">
        Tech Skills
      </h1>
      <CardDeck className="justify-content-center d-flex cards__container">
        <Row>
          {/* Frontend */}
          <Col lg={4}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">
                  Frontend
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.frontend.map(
                    (skill: ISkill, index: number): object => (
                      <span className="p-2" key={index}>
                        <a
                          className="text-dark text-decoration-none"
                          href={skill.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={skill.imgSrc}
                            alt={skill.imgAltText}
                            rounded
                            className="image-style m-1"
                          ></Image>{" "}
                          {skill.skillName}
                        </a>
                      </span>
                    )
                  )}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Backend */}
          <Col lg={4}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">
                  Backend
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.backend.map(
                    (skill: ISkill, index: number): object => (
                      <span className="p-2" key={index}>
                        <a
                          className="text-dark text-decoration-none"
                          href={skill.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={skill.imgSrc}
                            alt={skill.imgAltText}
                            rounded
                            className="image-style m-1"
                          ></Image>{" "}
                          {skill.skillName}
                        </a>
                      </span>
                    )
                  )}
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Database */}
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">
                  Database
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.databases.map(
                    (skill: ISkill, index: number): object => (
                      <span className="p-2" key={index}>
                        <a
                          className="text-dark text-decoration-none"
                          href={skill.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={skill.imgSrc}
                            alt={skill.imgAltText}
                            rounded
                            className="image-style m-1"
                          ></Image>{" "}
                          {skill.skillName}
                        </a>
                      </span>
                    )
                  )}
                </Card.Text>
              </Card.Body>
            </Card>
            {/* Hosting Platforms */}
            <Card className="focus mt-2 mb-2 ">
              <Card.Body>
                <Card.Title className="text-center  card-title">
                  Hosting Platforms
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.hostingPlatforms.map(
                    (skill: ISkill, index: number): object => (
                      <span className="p-2" key={index}>
                        <a
                          className="text-dark text-decoration-none"
                          href={skill.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={skill.imgSrc}
                            alt={skill.imgAltText}
                            rounded
                            className="image-style m-1"
                          ></Image>{" "}
                          {skill.skillName}
                        </a>
                      </span>
                    )
                  )}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            {/* Testing Frameworks */}
            <Card className="focus mt-2 mb-2 ">
              <Card.Body>
                <Card.Title className="text-center  card-title">
                  Testing Frameworks & Runners
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.testing.map(
                    (skill: ISkill, index: number): object => (
                      <span className="p-2" key={index}>
                        <a
                          className="text-dark text-decoration-none"
                          href={skill.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={skill.imgSrc}
                            alt={skill.imgAltText}
                            rounded
                            className="image-style m-1"
                          ></Image>{" "}
                          {skill.skillName}
                        </a>
                      </span>
                    )
                  )}
                </Card.Text>
              </Card.Body>
            </Card>
            {/* Programming Languages */}
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">
                  Programming Languages
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.programmingLanguages.map(
                    (skill: ISkill, index: number): object => (
                      <span className="p-2" key={index}>
                        <a
                          className="text-dark text-decoration-none"
                          href={skill.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={skill.imgSrc}
                            alt={skill.imgAltText}
                            rounded
                            className="image-style m-1"
                          ></Image>{" "}
                          {skill.skillName}
                        </a>
                      </span>
                    )
                  )}
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Version Control */}

            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">
                  Version Control
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  <span className="p-2">
                    <a
                      className="text-dark text-decoration-none"
                      href={skills.versionControl[0].link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={skills.versionControl[0].imgSrc}
                        alt={skills.versionControl[0].imgAltText}
                        rounded
                        className="image-style m-1"
                      ></Image>{" "}
                      {skills.versionControl[0].skillName}
                    </a>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </CardDeck>
    </div>
  );
};

export default Skills;
