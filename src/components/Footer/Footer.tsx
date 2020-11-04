import React from "react";
import styled from "styled-components";

const Div = styled.div`
  background-color: #101018f8;
  color: #fff;
  border: 2px solid #101018f8;
  border-top-left-radius: 3px;
  text-align: center;
  padding-top: 0.5rem;
  padding-bottom: 0.9rem;
`;

function Footer() {
  return <Div>@ Gemma Sanz Rabadán {new Date().getFullYear()}</Div>;
}
export default Footer;
