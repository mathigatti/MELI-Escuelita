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
app.set('views', './public/views/');


var db;

MongoClient.connect('mongodb://mgatti:mgatti@ds127998.mlab.com:27998/meli-escuelita-db', function (err, database) {
    if (err) return console.log(err);
    db = database;
    for(var i = 0;i<1000; i++){
        var imgURL = '/Users/mgatti/Desktop/Curso/MELI-Escuelita/camera/a.png';
        var texto = new Buffer(fs.readFileSync(imgURL)).toString("base64");
        db.collection('imagenes').update({'_id':1},{'name':texto}, function (err, result) {
            if (err) return console.log(err);
            console.log('saved to database');
        });
    }
});