const express = require("express");

// Express uygulaması oluşturulur
const app = express();

app.use(function (req, res, next) {
  console.log("middleware 1");
  next();
});

app.use(function (req, res, next) {
  console.log("middleware 2");
  next();
});

app.use(function (req, res) {
  console.log("middleware 3");
  res.send("<h1>Home Page middleware3</h1>");
});

app.listen(3000, function () {
  console.log("listening on port 3000");
});
