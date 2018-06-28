'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let SpellSchema = new Schema({
	name: {type: String, required: true},
	type: {type: String, enum: ['charm', 'spell', 'curse', 'jinx', 'counter-spell', 'healing spell', 'conjuration', 'transfiguration', 'hex']},
	description: String
});

module.exports = mongoose.model('Spell', SpellSchema);