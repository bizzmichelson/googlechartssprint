var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 5000;
var router = express.Router();
var Chart = require('chart.js');
var basics = require('./routes/basics');
var ctx = "myChart";
var bodyParser = require('body-parser');



app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/basics', basics);

app.listen(port, function () {
  console.log('localhost running on port', port);
});


