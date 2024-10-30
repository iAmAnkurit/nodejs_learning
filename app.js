// const express = require("express");
// const path = require("path");
// const app = express();
// const usermodel = require("./models/user");

// app.set("view engine", "ejs");
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//   res.render("index");
// });

// app.post("/create", async (req, res) => {
//   const { name, email, imageUrl } = req.body;
//   const createdUser = await usermodel.create({
//     name,
//     email,
//     imageUrl,
//   });

//   res.redirect("/read");
// });

// app.get("/read", async (req, res) => {
//   const users = await usermodel.find();

//   res.render("read", { users: users });
// });

// app.get("/delete/:id", async (req, res) => {
//   const id = req.params.id;
//   const users = await usermodel.findOneAndDelete({ _id: id });

//   res.redirect("/read");
// });

// app.get("/edit/:userId", async (req, res) => {
//   const id = req.params.userId;
//   const user = await usermodel.findOne({ _id: id });
//   res.render("edit", { user: user });
// });

// app.post("/update/:userId", async (req, res) => {
//   const { name, email, imageUrl } = req.body;
//   const id = req.params.userId;
//   const user = await usermodel.findOneAndUpdate(
//     { _id: id },
//     { name, email, imageUrl },
//     {
//       new: true,
//     }
//   );

//   res.redirect("/read");
// });

// app.listen(3000);

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.cookie("name", "Ankurit");
  res.send("Done");
});

app.listen(3000);
