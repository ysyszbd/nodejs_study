// 路由表示在/users + 定义的路由即可
var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.get("/1", (req, res, next) => {
  res.send("1111111——测试");
});
router.get("/cool", (req, res, next) => {
  res.render("index", { title: "你好酷" });
});

module.exports = router;
