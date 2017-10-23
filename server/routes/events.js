var express = require("express");
var router = express.Router();
var pool = require("../../public/modules/pool.js");


// var eventsOneDesc = req.body.eventsOneDesc;
// var eventsOneYear = req.body.eventsOneYear;
// var eventsTwoDesc = req.body.eventsTwoDesc;
// var eventsTwoYear = req.body.eventsTwoYear;

  router.post('/', function(req, res) {
  
    // pool.connect
    pool.connect(function(connectionError, client, done) {
      // error handling for the connection
      if (connectionError) {
        console.log(connectionError);
        res.sendStatus(500);
      } else {
        // client.query
        client.query("INSERT INTO significant_event (description, date) VALUES ($1, $2), ($3, $4);", [req.body.sigEventOneDesc, req.body.sigEventOneYear, req.body.sigEventTwoDesc, req.body.sigEventTwoYear], function(
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

  // router.get('/', function(req, res) {
  //   console.log("inside GET function");
  //   pool.connect(function(err, client, done) {
  //     if (err) {
  //       res.sendStatus(500);
  //     } else {
  //       client.query("SELECT * FROM significant_event", function(err, resObj) {
  //         // done();
  //         if (err) {
  //           res.sendStatus(500);
  //         } else {
  //           console.log(resObj.rows);
  //           res.send(resObj.rows);
  //         }
  //       });
  //     }
  //   });
  // });

 
  
  module.exports = router;