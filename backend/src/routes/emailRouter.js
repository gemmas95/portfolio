const express = require("express");
const nodemailer = require("nodemailer");
const debug = require("debug")("app:emailRouter");

const emailRouter = express.Router();

function routes() {
  emailRouter.route("/").post((req, res) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.PASSWORD,
        pass: process.env.EMAIL,
      },
    });

    const mailOptions = {
      from: req.body.email,
      to: "gemma1030@gmail.com",
      subject: `PORTFOLIO MAIL: ${req.body.email}, ${req.body.name}`,
      text: req.body.message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.status(400);
        res.send(error);
        debug(error);
      } else {
        debug(info, "Email sent successfully!");
        res.status(200);
      }
    });
  });

  return emailRouter;
}

module.exports = routes;
