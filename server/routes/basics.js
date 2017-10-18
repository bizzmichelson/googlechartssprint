var express = require("express");
var router = express.Router();
var pool = require("../modules/pool");


router.post("/basics", function(req, res) {
    console.log(req.body);
    console.log("post body", req.body.born);
    var post = req.body.born;
  
    // pool.connect
    pool.connect(function(connectionError, client, done) {
      // error handling for the connection
      if (connectionError) {
        console.log(connectionError);
        res.sendStatus(500);
      } else {
        // client.query
        // parameterized queries
        client.query("INSERT INTO born (year) VALUES ($1);", [post], function(
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