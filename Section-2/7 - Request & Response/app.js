var http = require("http");

var server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  // res.setHeader( "Content-Type", "text/plain" );
  // res.write ("Basarili 200 :) res");
  res.statusCode = 200;
  res.statusMessage = ":)";

  res.write("<h1>Basarili 200 :) res</h1>");
  res.write("<p>res paragraf</p>");

  res.end();
});

server.listen(3000);
console.log("Node.js server at port 3000");
