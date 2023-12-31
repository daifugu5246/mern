const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db_connect = require("./db/db.js");
const generalRouter = require("./router/general.js");
const auctionRouter = require("./router/auction.js");
const generalProfile = require("./router/profiles.js");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json({limit: '5mb'}));


db_connect()

  .then(() => {
    app.use("/", generalRouter);
    app.use("/auction", auctionRouter);
    app.use("/profile",generalProfile);
    app.listen(port, () => {
      console.log("The server listening on port " + port);
    });
  })
  .catch((err) => {
    console.error(err);
  });
