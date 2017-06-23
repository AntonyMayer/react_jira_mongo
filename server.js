const express = require('express'),
    bodyParser = require('body-parser'),
    MongoClient = require('mongodb').MongoClient,
    assert = require('assert'),
    app = express(),
    router = express.Router(),
    expressWs = require('express-ws')(app),
    events = require('events'),
    jiraUpdate = new events.EventEmitter();

/**
 * Config
 */
var jira = {
    url: "mongodb://localhost:27017/jiraStat",
    port: 7711
};

jiraUpdate.emit('update');

/**
 * Extending defaults
 */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/build'));
app.use(router);


router.post('/update', function(req, res) {
    console.log('Server >> Update request');
    res.send('Hi');
});


/**
 * Connecting to DB and starting server if connection was succesfull 
 */
MongoClient.connect(jira.url, (err, db) => {
    assert.equal(null, err);
    if (err) throw err;
    else console.log('Server >> MongoDB connected');
    db.close();
    app.listen(jira.port);
    console.log(`Server >> Listening on ${jira.port}`);
});

/*****************************\
< * Mongo DB Utility methods * >
\*****************************/

