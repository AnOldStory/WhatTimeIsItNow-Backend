var express = require("express");
var db = require("./database");
var router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});

router.get("/board", (req, res, next) => {
  db.getList(req, res, (err,list) => {
    if (err) next(err);
    else{
      res.setHeader("Content-Type", "application/json");
      res.json(JSON.stringify(list));
    }
  });
});

router.post("/board", (req, res, next) => {
  db.newPost(req, res, (err, result) => {
    if (err) next(err);
    else{
      res.setHeader("Content-Type", "application/json");
      res.json(JSON.stringify(list));
    }
  });
});

router.get("/board/:id", (req, res, next) => {
  db.getPost(req, res, (err, list) => {
    if (err) next(err);
    else {
      res.setHeader("Content-Type", "application/json");
      res.json(JSON.stringify(list));
    }
  });
});

module.exports = router;
