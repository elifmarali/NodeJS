const express = require("express");
const router = express.Router();
const path = require("path");

router.use("/blogs/:blogId", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../views/admin", "blogDetails.html"));
});

router.use("/blogs", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../views/admin", "blogs.html"));
});

module.exports = router;
