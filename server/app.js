var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 5000;
var router = express.Router();
var basics = require('./routes/basics');
var addEvents = require('./routes/addEvents');
var chart = require('./routes/chart');
var bodyParser = require('body-parser');



app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api/basics', basics);
app.use('/api/addEvents', addEvents);
app.use('/api/chart', chart);


app.listen(port, function () {
  console.log('localhost running on port', port);
});


