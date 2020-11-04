import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="py-2 text-center footer-style">
      <p>@ Gemma Sanz Rabadán {new Date().getFullYear()}</p>
    </div>
  );
}
export default Footer;
