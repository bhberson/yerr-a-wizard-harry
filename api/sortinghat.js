'use strict';
let express = require('express');
let router = express.Router();

router.get('/', (req, res) =>{
	let houses = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];
	let house = houses[Math.floor(Math.random() * houses.length)];

	res.send(house);
});

module.exports = router;