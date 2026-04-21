const fs = require("fs");

const routesHandler = (req, res) => {
  console.log(req.url);

  if (req.url == "/form" && req.method === "POST") {
    const data = [];

    req.on("data", (chunk) => {
      data.push(chunk);
    });

    req.on("end", () => {
      const result = Buffer.concat(data).toString();
      const parsedData = result.split("=")[1];
      fs.appendFile("formData.txt", parsedData, (err) => {
        if (err) {
          console.log("err : ", err);
        } else {
          res.statusCode = 302;
          res.setHeader("Location", "/");
          res.end();
        }
      });
    });
  } else if (req.url == "/form") {
    fs.readFile("form.html", (err, html) => {
      res.write(html);
      res.end();
    });
  }
}

module.exports = routesHandler;