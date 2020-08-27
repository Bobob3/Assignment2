var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors());

const path = require('path');
var bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../dist/Week4/'));

require('./routes/api-login.js')(app,path);

var http = require("http").Server(app);
var server = http.listen(3000, function() {
    console.log("Server listening on port: 3000");
});
