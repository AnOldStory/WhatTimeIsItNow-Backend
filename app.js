var express = require("express");
var path = require("path");
//var favicon = require('serve-favicon');
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var compression = require("compression");
var helmet = require("helmet");
var cors = require("cors");

var index = require("./routes/index");
var users = require("./routes/users");

var config = require("./config/config");

var mainSequelize = require("./models/index");

// var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: config.mysql.host,
//   port: config.mysql.port,
//   user: config.mysql.user,
//   password: config.mysql.password,
//   database: config.mysql.database
// });

// connection.connect(function(err, connection) {
//   if (err) {
//     if (connection) {
//       connection.release();
//     }
//     console.log(err);
//   }
// });

var index = require("./routes/index");

var app = express();
app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(compression());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(helmet());

app.use("/", index);
app.use("/users", users);

mainSequelize.sequelize
  .sync({force:true})
  .then(() => {
    console.log("DB OK!");
  })
  .catch(err => {
    console.log("DB err : ", err);
  });
  
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
