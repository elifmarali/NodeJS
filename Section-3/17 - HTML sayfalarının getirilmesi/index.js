const express = require("express");
const app = express();
const path = require("path");
const userRoutes = require("./routes/users");
const adminRoutes = require("./routes/admin");

// 18 - Static Files (Statik Dosyalar):
// CSS, JS, resim gibi direkt sunulan (işlenmeyen) dosyalardır.
// express.static ile bu dosyaları tarayıcıya URL üzerinden erişilebilir hale getiririz.
app.use(
  "/bootstrap", // Tarayıcıda bu URL ile erişilecek (örn: /bootstrap/...)
  express.static(path.join(__dirname, "node_modules/bootstrap")), // Gerçek klasör yolu
);

// Yani:
// Tarayıcıdan /bootstrap/dist/css/bootstrap.min.css isteği gelirse
// Express bunu node_modules/bootstrap/dist/css/bootstrap.min.css dosyasından alıp gönderir.

app.use("/public", express.static(path.join(__dirname, "public")));

// Sıra ÖNEMLİDİR : admin daha özel olduğu için userdan üstte olmalıdır
// Aksi halde / bu sayfa açılır her /admin durumunda

// Her birinde "/admin" ön eki bulunduğundan dolayı her sefrinde "/admin" yazmamak için ilk parametreye eklenmiştir
app.use("/admin",adminRoutes);
app.use(userRoutes);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
