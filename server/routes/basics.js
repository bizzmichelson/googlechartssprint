var router = require('express').Router();
var pg = require('pg');


router.get('/', function(req, res){
    console.log('in basics');
    // Rent.find({rent:{$exists:true}}).then(function(data) {
    //     res.send(data);
    // }).catch(function(err){
    //     console.log(err);
    //     res.sendStatus(404);
    // })
});

module.exports = router;