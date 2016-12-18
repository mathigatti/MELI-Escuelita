/**
 * Created by mgatti on 12/5/16.
 */


const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
var fs = require('fs');

var app = express();
app.use(bodyParser());

const mustacheExpress = require('mustache-express');
const request = require('request');

// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress());

app.set('view engine', 'ejs');
app.set('views', './views/');


var db;

MongoClient.connect('mongodb://mgatti:mgatti@ds127998.mlab.com:27998/meli-escuelita-db', function (err, database) {
if (err) return console.log(err);
db = database;
app.listen(process.env.PORT || 3000, function () {
    console.log('listening on 3000');
    })
});

app.get('/', function (req, res) {
    db.collection('imagenes').find().toArray( function (err, result) {
    if (err) return console.log(err);
    // renders index.ejs
    res.render('index.ejs', {imagen: result[result.length-1]})
    })
});
