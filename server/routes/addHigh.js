var express = require("express");
var router = express.Router();
var pool = require("../../public/modules/pool.js");



router.delete("/:id", function (req, res) {
  console.log("in delete inventory route");
  console.log("req.params.id ->", req.params.id);
  var dbId = req.params.id;

  // pool.connect
  pool.connect(function (connectionError, client, done) {
    // error handling for the connection
    if (connectionError) {
      console.log(connectionError);
      res.sendStatus(500);
    } else {
      // client.query
      // parameterized queries
      // DELETE FROM inventory WHERE id=$1, [dbId]
      client.query("DELETE FROM dynamic WHERE id=$1;", [dbId], function (
        queryError,
        result
      ) {
        done();
        // error handling for the query
        if (queryError) {
          console.log(queryError);
          res.sendStatus(500);
        } else {
          // if successful respond with a 200 level status code
          res.sendStatus(202);
        }
      });
    }
  });
});

router.get('/', function (req, res) {
  console.log("inside GET function");
  pool.connect(function (err, client, done) {
    if (err) {
      res.sendStatus(500);
    } else {
      client.query("SELECT * FROM dynamic", function (err, resObj) {
        // done();
        if (err) {
          res.sendStatus(500);
        } else {
          console.log(resObj.rows);
          res.send(resObj.rows);
        }
      });
    }
  });
});


module.exports = router;