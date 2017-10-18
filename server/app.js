var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 5000;
var router = express.Router();
var Pool = require("pg").Pool;
// var materials = require('angular-material');

var config = {
  host: "localhost", // where does the db server live
  port: 5432, // what port is it listening on - 5432 default
  database: "solo_project",
  max: 20 // number of clients in the pool
};

// ourPool is an instance of a pool that knows our configuration


app.use(express.static('public'));



app.listen(port, function () {
  console.log('localhost running on port', port);
});


var ourPool = new Pool(config);

console.log("connected to DB");

module.exports = ourPool;