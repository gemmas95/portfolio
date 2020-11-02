import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Profile from "../../assets/img/profile/profile.jpeg";
import Button from "react-bootstrap/Button";
import "./About.css";

function About() {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">About me</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            {/* Profile Pic */}
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2">
                <Image
                  className="profile justify-content-end"
                  alt="profile"
                  src={Profile}
                  roundedCircle
                  fluid
                />
              </Row>
            </Col>
            {/* About me description*/}
            <Col xs={12} md={6}>
              <Row>
                {/* Description */}
                Hi there! I am <strong> &nbsp; Gemma Sanz Rabadán</strong>
                <br /> A passionate developer and a Physiotherapist, born in
                Spain. I am a Full Stack Web Developer with React.js, Flux &
                Redux, Node.js, and MongoDB as my tech stack.
                <br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Odit dignissimos molestias quidem porro, in quasi at nostrum
                officiis!
                <br />
                Harum eveniet minima quo dignissimos est eligendi optio velit
                unde accusantium. Repellendus.
              </Row>
              <Row>
                {/* Buttons */}
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1TMHv7oX8D2PEzTvRn7h86i-XzjQC2bCz/view?usp=sharing">
                      <Button className="m-2" variant="outline-success">
                        My currriculum
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/gemma-sanz-rabadan/">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>{" "}
                  <div>
                    <a href="https://github.com/gemmas95">
                      <Button className="m-2" variant="outline-dark">
                        GitHub{" "}
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
export default About;
