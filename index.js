const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Good to go!");
});

// https://ghoulish-phantom-60830.herokuapp.com/ | https://git.heroku.com/ghoulish-phantom-60830.git
