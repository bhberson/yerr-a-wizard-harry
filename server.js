// base setup
var express = require('express');
var app = express();
var api = require('./api/index.js');
var bodyParser = require('body-parser');
var mongoDB = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/api';

var Character = require('./api/models/character');

// configuration for bodyParser to get data from a POST

app.use(bodyParser.urlencoded({ extend: true }));
app.use(bodyParser.json());

//set the port

var port = process.env.PORT || 8080;

// routes for the API
//Characters
app.use('/api/characters', api.character);

//Sorting Hat
app.use('/api/houses', api.houses);

//Sorting Hat
app.use('/api/sortinghat', api.sortingHat);
//start the server

app.listen(port);
console.log({ mongoDB });
let c = api.mongoose.connect(mongoDB);
let connection = api.mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function () {
	console.log('server connected');
});


console.log('wingardium leviosa')