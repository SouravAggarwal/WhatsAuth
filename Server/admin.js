var express = require('express'),
    MongoClient = require('mongodb').MongoClient,
    nJwt = require('njwt'),
    main = require('./index');

var app = express();

module.exports={'app':app}

app.set('view engine','ejs');

app.get('/', function (req, res) {
    res.render('pages/index')
})

app.get('/query',function(req,res){
    MongoClient.connect(main.dbURL,function(err,db){
        // Sample Query Goes Here
        db.close();
})
})
