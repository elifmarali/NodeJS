var http = require("http");

var server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url === "/urunler") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

    res.write(
      "<html>" +
        "<head><title>Ürünler</title></head>" +
        "<body><h1>Ürünler Sayfasına Hoşgeldiniz</h1><a href='/'>Ana sayfaya gitmek için tıklayınız</a></body>" +
      "</html>",
    );
  } else {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8 " });
    res.write("Sayfa bulunamamıştır");
  }

  res.end();
});

server.listen("3000");
