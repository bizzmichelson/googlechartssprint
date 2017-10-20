var express = require("express");
var router = express.Router();
var pool = require("../../public/modules/pool.js");


// router.post("/", function(req, res) {
//     console.log(req.body);
//     console.log("post body", req.body.born);
//     var born = req.body.born;
//     var highDesc = req.body.basicHighDesc;
//     var highDate = req.body.basicHighYear;
//     var lowDesc = req.body.basicLowDesc;
//     var lowDate = req.body.basicLowYear;
    
  
//     // pool.connect
//     pool.connect(function(connectionError, client, done) {
//       // error handling for the connection
//       if (connectionError) {
//         console.log(connectionError);
//         res.sendStatus(500);
//       } else {
//         // client.query
//         // parameterized queries
//               //INSERT INTO treats (name, description, pic) VALUES ($1, $2, $3);
//               //"INSERT INTO dynamic (point_type, date) VALUES ('birth', $1);", [req.body.born]
//               //"INSERT INTO dynamic (point_type, date) VALUES ('birth', $1);", [req.body.born], "INSERT INTO dynamic (point_type, description, date) VALUES ('low', $1, $2);", [req.body.basicLowDesc, req.body.basicLowYear],

//         client.query("INSERT INTO dynamic (point_type, description, date) VALUES ('high', $1, $2);", [req.body.basicHighDesc, req.body.basicHighYear], function(
//           queryError,
//           result
//         ) {
//           done();
//           // error handling for the query
//           if (queryError) {
//             console.log(queryError);
//             res.sendStatus(500);
//           } else {
//             // if successful respond with a 200 level status code
//             res.sendStatus(200);
//           }
//         });
//       }
//     });
//   });
  router.post("/", function(req, res) {
    console.log(req.body);
    console.log("post body", req.body.born);
    var born = req.body.born;
    var highDesc = req.body.basicHighDesc;
    var highDate = req.body.basicHighYear;
    var lowDesc = req.body.basicLowDesc;
    var lowDate = req.body.basicLowYear;
    
  
    // pool.connect
    pool.connect(function(connectionError, client, done) {
      // error handling for the connection
      if (connectionError) {
        console.log(connectionError);
        res.sendStatus(500);
      } else {
        // client.query
        // parameterized queries
              //INSERT INTO treats (name, description, pic) VALUES ($1, $2, $3);
              //"INSERT INTO dynamic (point_type, date) VALUES ('birth', $1);", [req.body.born]
              //"INSERT INTO dynamic (point_type, date) VALUES ('birth', $1);", [req.body.born], "INSERT INTO dynamic (point_type, description, date) VALUES ('low', $1, $2);", [req.body.basicLowDesc, req.body.basicLowYear],

        client.query("INSERT INTO dynamic (point_type, description, date) VALUES ('born', $1, null), ('high', $2, $3), ('low', $4, $5);", [req.body.born, req.body.basicHighDesc, req.body.basicHighYear, req.body.basicLowDesc, req.body.basicLowYear], function(
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