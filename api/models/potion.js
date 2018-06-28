'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let PotionSchema = new Schema({
	name: {type: String, required: true},
	ingredients: [{type: String}],
	effect: String,
	sideEffects: String,
	difficultyLevel: {type: String, enum: ['beginner', 'intermediate', 'advanced']},
	brewingTime: Number,
	dangerous: Boolean,
});

module.exports = mongoose.model('Character', CharacterSchema);