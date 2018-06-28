'use strict';
let auth = require('./auth.js');
let express = require('express');
let router = express.Router();

router.get('/', (req, res) =>{
	auth(req, res);
	let houses = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];
	res.send(houses);
});

module.exports = router;