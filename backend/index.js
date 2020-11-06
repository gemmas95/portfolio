/* eslint-disable no-console */
require("dotenv").config();

const express = require("express");
const debug = require("debug")("app");
const bodyParser = require("body-parser");

const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Routes configuration

const emailRouter = require("./src/routes/emailRouter")();

app.get("/api", (req, res) => {
  res.send("API Status: Running deployed successfully!!");
});

app.use("/api/email", emailRouter);
/* 
app.post("/api/email", (req, res) => {
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
      console.log(error);
    } else {
      console.log(info, "Email sent successfully!");
      res.status(200);
    }
  });
}); */

app.listen(PORT, () => {
  debug(`Running on port ${PORT}`);
});
