const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/create" && req.method === "POST") {
    // ör gibi blogs.txt dosyası eğer mevcutta yok ise oluşturur ve sonuna "deneme" ekler
    // eğer varsa sonuna "deneme" ekler
    fs.appendFile("blogs.txt", "deneme", (err) => {
      if (err) {
        console.log("err : ", err);
      } else {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        res.end();
      }
    });
  } else if (req.url == "/create") {
    fs.readFile("create.html", (err, html) => {
      res.write(html);
      res.end();
    });
  } else if (req.url === "/") {
    fs.readFile("index.html", (err, html) => {
      res.write(html);
      res.end();
    });
  }
});

server.listen(3000);
