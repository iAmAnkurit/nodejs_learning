const express = require("express");

const app = express();

const userModel = require("./model/user");
const postModel = require("./model/post");

app.get("/create", async (req, res) => {
  let user = await userModel.create({
    username: "ankurit",
    age: 24,
    email: "ankurit@gmail.com",
  });

  res.send(user);
});

app.get("/post/create", async (req, res) => {
  let post = await postModel.create({
    postdata: "Hi all, Hello world",
    user: "67264c02bb405040647e8b7d",
  });

  let user = await userModel.findOne({ _id: "67264c02bb405040647e8b7d" });

  user.posts.push(post._id);
  await user.save();

  res.send({ post, user });
});

app.listen(3000);
