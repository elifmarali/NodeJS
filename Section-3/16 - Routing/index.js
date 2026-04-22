const express = require("express");

const app = express();

// Middleware ve route'larda sıralama ÇOK önemlidir.
// Express, gelen isteği yukarıdan aşağıya doğru kontrol eder
// ve eşleşen ilk route'u çalıştırır.

// Eğer "/" (ana sayfa) en üstte olsaydı:
// "/blogs" veya "/blogs/5" gibi tüm istekler de buraya düşerdi
// çünkü "/" her URL ile eşleşir.

// Eğer "/blogs", "/blogs/5"ten önce yazılsaydı:
// "/blogs/5" isteği geldiğinde bile önce "/blogs" eşleşir
// ve detay sayfasına hiç girilmezdi.

// Bu yüzden route'lar:
// en spesifik (en detaylı) olandan
// en genel olana doğru sıralanmalıdır.

app.use("/blogs/:blogId/user/:username", (req, res) => {
  console.log("req.params : ", req.params);
  console.log(req.params.blogId);
  console.log(req.params.username);
  res.send("Blog Detay Sayfası");
});

app.use("/blogs", (req, res) => {
  res.send("Blog Listesi");
});

app.use("/", (req, res) => {
  res.send("Ana Sayfa");
});

app.listen(3000, (req, res) => {
  console.log("listening on port 3000");
});
