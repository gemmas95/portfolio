import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "./ContactMe.css";

function ContactMe() {
  return (
    <div id="contact">
      <h1 className="pt-3 text-center font-details-b pb-3">Contact me</h1>
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a
                href="mailto:gemma1030@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-danger" title="gemma1030@gmail.com">
                  <i className="fas fa-envelope-square"></i> Email me
                </Button>
              </a>
            </div>

            <div className="m-2">
              <a
                href="https://www.linkedin.com/in/gemma-sanz-rabadan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-primary" title="Visit my LinkenIn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>

            <div className="m-2">
              <a
                href="https://github.com/gemmas95"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-dark" title="My other projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
}
export default ContactMe;
