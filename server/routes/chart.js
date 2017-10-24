var express = require("express");
var router = express.Router();
var pool = require("../../public/modules/pool.js");

router.get('/', function(req, res) {
    console.log("inside GET function");
    pool.connect(function(err, client, done) {
      if (err) {
        res.sendStatus(500);
      } else {
        client.query("SELECT * FROM dynamic", function(err, resObj) {
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

  router.get('/', function(req, res) {
    console.log("inside GET function");
    pool.connect(function(err, client, done) {
      if (err) {
        res.sendStatus(500);
      } else {
        client.query("SELECT * FROM significant_event", function(err, resObj) {
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