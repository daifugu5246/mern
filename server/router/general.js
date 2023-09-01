const express = require("express");
const User = require("../models/users.js");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to Home page");
});

router.post("/login", (req, res) => {
  console.log("Logging in by: ", req.body);
  User.findOne({
    username: req.body.username,
    password: req.body.password,
  })
    .then((user) => {
      if (user) {
        res.status(200).send("Logged in successfully");
      } else {
        res.status(401).send("Invalid username or password");
      }
    })
    .catch((error) => {
      console.error("Error logging in:", error);
      res.status(500).send("Error logging in");
    });
});

router.post("/register", (req, res) => {
  console.log("Reagister by: ", req.body);
  User.findOne({
    username: req.body.username,
  }).then((user) => {
    if (user) {
      res.status(401).send("This username already exists");
    } else {
      User.create({
        username: req.body.username,
        password: req.body.password,
      })
        .then(() => {
          res.status(201).send("Registered Successfully");
        })
        .catch((err) => {
          console.error("Error registering user", err);
          res.status(500).send("Error registering user");
        });
    }
  });
});

module.exports = router;
