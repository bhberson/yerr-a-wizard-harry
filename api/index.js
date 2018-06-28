'use strict';

let mongoose = require('mongoose');
let mongoDB = process.env.MONGODB_URI || 'mongodb://localhost/api';

module.exports = {
	character: require('./character.js'),
	potion: require('./potion.js'),
	spell: require('./spell.js'),
	houses: require('./houses.js'),
	sortingHat: require('./sortinghat.js'),
	mongoose
}