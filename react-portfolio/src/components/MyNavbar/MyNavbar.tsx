import React, { FC, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./MyNavbar.css";
import styled from "styled-components";

const LogoBranch = styled.a`
  margin: auto;
  color: rgba(255, 255, 255, 0.5);
  font-family: "Dancing Script", cursive;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 2px;
  padding-left: 10px;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    color: white;
  }
`;

const MyNavbar: FC = () => {
  const [navbar, setNavbar] = useState<boolean>(false);

  const changeBackground = () => {
    window.scrollY >= 630 ? setNavbar(true) : setNavbar(false);
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <Navbar
      fixed="top"
      collapseOnSelect
      expand="md"
      className={
        navbar ? "nav__theme active justify-content-between" : "nav__theme"
      }
      variant="dark"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <LogoBranch href="#home">Gemma Sanz</LogoBranch>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          {/* <Nav.Link href="#experience">Experience</Nav.Link> */}
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
