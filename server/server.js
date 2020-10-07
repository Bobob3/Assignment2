const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const bodyParser = require("body-parser");
const http = require('http').Server(app);
const io = require('socket.io')(http);
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const sockets = require('./socket.js');
const server = require('./listen.js');

const PORT = 3000;
const url = 'mongodb://localhost:27017';

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../dist/Week4/'));
sockets.connect(io, PORT);

MongoClient.connect(url, {poolSize:10, useNewUrlParser: true, useUnifiedTopology: true}, function(err, client){
    if(err) {return console.log(err)}
    const dbName = 'chat';
    const db = client.db(dbName);
    

    require('./routes/add.js')(db, app);
    //require('./routes/update.js')(db, app, ObjectID);
    require('./routes/read.js')(db, app);
    //require('./routes/remove.js')(db, app, ObjectID);
    console.log("all started");


});


server.listen(http,PORT);
require('./routes/api-login.js')(app,path);




