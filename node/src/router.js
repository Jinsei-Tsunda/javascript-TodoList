const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

const db = require(__dirname + "/db_connect");

//read
// router.get("/api", async (req, res) => {
//   const sql = "SELECT * FROM `todoList`";
//   const [r] = await db.query(sql);

//   res.json(r);
// });

//create
router.post("/api/new", async (req, res) => {
  const data = { ...req.body };
  data.last_edited_date = new Date();
  const sql = "INSERT INTO `todoList` SET ?";
  const [r] = await db.query(sql, [data]);

  res.json(r);
});

//update
router.post("/api/edit/:sid", async (req, res) => {
  const data = { ...req.body };
  const sql = "UPDATE `address_book` SET ? WHERE `sid`=?";
  const [r] = await db.query(sql, [data]);

  res.json(r);
});

//delete
router.delete("/api/del/:sid", async (req, res) => {
  const sql = "DELETE FROM `todoList` WHERE sid=?";
  const [r] = await db.query(sql, []);

  res.json(r);
});

module.exports = router;
