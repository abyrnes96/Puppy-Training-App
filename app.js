const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => res.render("index"));
app.get("/crate", (req, res) => res.render("crate"));
app.get("/potty", (req, res) => res.render("potty"));
app.get("/commands", (req, res) => res.render("commands"));
app.get("/social", (req, res) => res.render("social"));
app.get("/schedule", (req, res) => res.render("schedule"));


app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});
