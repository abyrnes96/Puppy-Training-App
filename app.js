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
app.get("/commands/come", (req, res) => res.render("commands_come"));
app.get("/commands/place", (req, res) => res.render("commands_place"));
app.get("/commands/leave-it", (req, res) => res.render("commands_leave_it"));
app.get("/commands/safe", (req, res) => res.render("commands_safe"));
app.get("/obedience", (req, res) => res.render("obedience"));
app.get("/obedience/impulse", (req, res) => res.render("obedience_impulse"));
app.get("/obedience/biting", (req, res) => res.render("obedience_biting"));
app.get("/obedience/jumping", (req, res) => res.render("obedience_jumping"));
app.get("/progress", (req, res) => res.render("progress"));



app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});
