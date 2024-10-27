const express = require("express");
const app = express();

app.use((req, res, next) => {
  next();
});

app.get("/", (req, res) => {
  res.send("Base page");
});

app.get("/profile", (req, res, next) => {
  return next(new Error("Somethign is off"));
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Something went wrong!");
});

app.listen(3000);
