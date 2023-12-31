const mongoose = require("mongoose");

const db_connect = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(
        "mongodb+srv://user:user1025246@cluster0.ot07ynz.mongodb.net/mtp?retryWrites=true&w=majority"
      )
      /*.connect(
        "mongodb://myUser:user5246@161.246.127.24:9029/mydb?readPreference=primary&ssl=false",
        { useNewUrlParser: true, useUnifiedTopology: true, authSource: "mydb" }
      )*/
      .then(() => {
        console.log("Connected to database");
        resolve();
      })
      .catch((err) => {
        console.error("Error connecting to database:", err);
        reject(err);
      });
  });
};

module.exports = db_connect;
