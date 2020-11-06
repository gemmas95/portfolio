/* eslint-disable no-console */
const express = require("express");
const debug = require("debug")("app");
const bodyParser = require("body-parser");

const cors = require("cors");
const sendGrid = require("@sendgrid/mail");

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

app.get("/api", (req, res) => {
  res.send("API Status: Running");
});

app.post("/api/email", (req, res) => {
  sendGrid.setApiKey(
    "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"
  );
  const msg = {
    to: "gemma1030@gmail.com",
    from: req.body.email,
    subject: "Website Portfolio Contact",
    text: req.body.message,
  };

  sendGrid
    .send(msg)
    .then((result) => {
      res.status(200).json({ success: true });
      res.json(result);
    })
    .catch((err) => {
      console.log(`error: ${err}`);
      res.status(401).json({ success: false });
    });
});
// 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

app.listen(PORT, () => {
  debug(`Running on port ${PORT}`);
});
