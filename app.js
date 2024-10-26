const express = require("express");
const app = express();

const usermodel = require("./usermodel");

app.get("/", (req, res) => {
  res.send("hey");
});

app.get("/create", async (req, res) => {
  let createdUser = await usermodel.create({
    name: "Ankurit",
    email: "ankurit@example.com",
    userName: "Ankurit_1891",
  });

  res.send(createdUser);
});

app.get("/read", async (req, res) => {
  let users = await usermodel.find();

  res.send(users);
});

app.get("/update", async (req, res) => {
  let updatedUser = await usermodel.findOneAndUpdate(
    { userName: "John_1891" },
    { name: "Johnathan" },
    { new: true }
  );

  res.send(updatedUser);
});

app.get("/delete", async (req, res) => {
  let deletedUser = await usermodel.findOneAndDelete({
    _id: "671cd0c6243f3908963666c8",
  });

  res.send(deletedUser);
});

app.listen(3000);
