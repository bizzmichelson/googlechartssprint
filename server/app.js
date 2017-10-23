var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 5000;
var router = express.Router();
var basics = require('./routes/basics');
var events = require('./routes/events');
var bodyParser = require('body-parser');



app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api/basics', basics);
app.use('/api/events', events);

app.listen(port, function () {
  console.log('localhost running on port', port);
});


