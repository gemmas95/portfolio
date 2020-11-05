import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import FormContact from "../../components/form/ContactMeForm/FormContact";

import "./ContactMe.css";

const ContactMe: React.FC = () => {
  return (
    <div id="contact">
      <Container className="container-box rounded">
        <h1 className="pt-3 text-center font-details-b pb-3">Let's talk</h1>
        {/* <Jumbotron className="contact-jumbotron"> */}
        <p className="text-center">
          I'm interested in new oportunities - especially ambitious or large
          projects. However, if you have other request or question, don't
          hesitate to contact me.
        </p>
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            {/* <div className="m-2">
              <a
                href="mailto:gemma1030@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-danger" title="gemma1030@gmail.com">
                  <i className="fas fa-envelope-square"></i> Email me
                </Button>
              </a>
            </div> */}
          </Col>
        </Row>
        {/* </Jumbotron> */}
        <FormContact />
      </Container>
    </div>
  );
};
export default ContactMe;
