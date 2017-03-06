var express = require('express');
var mongoose = require('mongoose');
var app = express();

app.use(express.static(__dirname + '/public'));

var router = express.Router();

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://192.168.1.101:27017/reaper');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Successfully connected to reaper");
});

var Media = require('./models/media.js');

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});


router.get('/images', function(req, res) {
    var perPage = 10;
    var page = Math.max(0, req.param('page'));
    
    Media.find({})
    .limit(perPage)
    .skip(perPage * page)
    .exec(function (err, media) {
        if (err) {
            res.send(err);
        } else {
            res.json(media);
        }
    })
});
//TODO: blag 

//FUTURE: blah


app.use('/api', router);
