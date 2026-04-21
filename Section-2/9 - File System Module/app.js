var http = require("http");
// Dosya okumaları için gerekli olan modüldür
var fs = require("fs");

var server = http.createServer((req, res) => {
  console.log("req.url : ", req.url);

  if (req.url == "/index.html") {
    fs.readFile("index.html", (err, html) => {
      // res.writeHead(200, { "Contant-Type": "text/html" });
      res.write(html);
      res.end();
    });
  } else if (req.url == "/blogs.html") {
    fs.readFile("blogs.html", (err, html) => {
      res.write(html);
      res.end();
    });
  } else if (req.url == "/about.html") {
    fs.readFile("about.html", (err, html) => {
      res.write(html);
      res.end();
    });
  } else {
    fs.readFile("404.html", (err, html) => {
      res.write(html);
      if (err) {
        console.log("err : ", err);
      }
      res.end();
    });
  }
});

server.listen(3000);
