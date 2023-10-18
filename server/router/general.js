const express = require("express");
const Users = require("../models/users.js");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to Home page");
});

router.post("/login", (req, res) => {
  console.log("Logging in by: ", req.body);
  Users.findOne({
    username: req.body.username,
    password: req.body.password,
  })
    .then((user) => {
      if (user) {
        //console.log(user)
        res.status(200).json(user);
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
  console.log("Register by: ", req.body);
  Users.findOne({
    username: req.body.username,
  }).then((user) => {
    if (user) {
      res.status(401).send("This username already exists");
    } else {
      Users.create({
        email: req.body.email,
        name: req.body.name,
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
