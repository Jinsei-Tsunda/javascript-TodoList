const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const router = require(__dirname + "/router");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//router
app.use("/", router);

//server listen
app.listen(3000, function () {
  console.log("server started, port 3000...");
});
