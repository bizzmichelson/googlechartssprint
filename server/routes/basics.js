var express = require("express");
var router = express.Router();
var pool = require("../../public/modules/pool.js");

// var born = req.body.born;
// var highDesc = req.body.basicHighDesc;
// var highDate = req.body.basicHighYear;
// var lowDesc = req.body.basicLowDesc;
// var lowDate = req.body.basicLowYear;


  router.post("/", function(req, res) {
  
    // pool.connect
    pool.connect(function(connectionError, client, done) {
      // error handling for the connection
      if (connectionError) {
        console.log(connectionError);
        res.sendStatus(500);
      } else {
        // client.query
        client.query("INSERT INTO dynamic (point_type, description, date) VALUES ('born', null, $1), ('high', $2, $3), ('low', $4, $5);", [req.body.born, req.body.basicHighDesc, req.body.basicHighYear, req.body.basicLowDesc, req.body.basicLowYear], function(
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
            res.sendStatus(200);
          }
        });
      }
    });
  });
  
  module.exports = router;