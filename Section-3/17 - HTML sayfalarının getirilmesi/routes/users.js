const express = require("express");
const router = express.Router();
const path = require("path");

router.use("/blogs/:blogId", (req, res, next) => {
  // console.log("__dirname : ", __dirname);
  //  __dirname :  C:\Users\elif.marali\Desktop\NodeJS\Section-3\17 - HTML sayfalarının getirilmesi
  // console.log("__filename : ", __filename);
  // __filename :  C:\Users\elif.marali\Desktop\NodeJS\Section-3\17 - HTML sayfalarının getirilmesi\index.js

  res.sendFile(path.join(__dirname, "../views/users", "blogDetails.html"));
});

router.use("/blogs", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../views/users", "blogs.html"));
});

router.use("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../views/users", "index.html"));
});

module.exports = router;
