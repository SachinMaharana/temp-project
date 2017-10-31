const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const app = express();
passport.use(new GoogleStrategy());

app.get("/", (req, res) => {
  res.send({ hi: "Sachin!" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Good to go!");
});

// https://ghoulish-phantom-60830.herokuapp.com/ | https://git.heroku.com/ghoulish-phantom-60830.git
