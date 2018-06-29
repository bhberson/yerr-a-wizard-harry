'use strict';
let models = require('./models/index.js');
let auth = require('./auth.js');
let express = require('express');
let router = express.Router();

// post a new character
router.post('/', (req, res) =>{
	auth(req, res);
	let model = req.body;
	let character = new models.character(model);      
	console.log(character);
	character.save(function(err, createdCharacter) {
	    if (err)
	        res.send(err + ' error saving character!');

	    res.json({ _id: createdCharacter._id });
	});
});

// search
router.post('/search/', (req, res) =>{
	auth(req, res);
	let body = req.body;

	models.character.findOne({ firstName: body.firstName.toLowerCase(), lastName: body.lastName.toLowerCase() }, '_id', (err, character) =>{
		if (err)
			res.send(err);
		else{
			if (character === null)
				res.json([]);
			res.json(character);
		}
	});
});

// get all characters 
router.get('/', (req, res) => {
	auth(req, res);
	models.character.find({}, null, {sort: {'_id': -1}}, function(err, docs){
		res.send(docs);
	})

});

// get characters by ID
router.get('/:character_id', (req, res) =>{
	auth(req, res);
	models.character.findById(req.params.character_id, (err, character) =>{
		if (err)
			res.send(err);
		res.json(character);
	});
});

// update character 
router.put('/:character_id', (req, res) =>{
	auth(req, res);
	models.character.findById(req.params.character_id, (err, character)=>{
		if (err)
			res.send(err);

		character = Object.assign(character, req.body);

		character.save((err) =>{
			if (err)
				res.send(err);
			res.json({message: 'character updated!'});
		});

	});
});

// delete character
router.delete('/:character_id', (req, res) =>{
	auth(req, res);
	models.character.remove({
		_id: req.params.character_id
	}, (err, character) =>{
		if (err)
			res.send(err);
		res.json({message: 'Successfully deleted!'});
	});
});


module.exports = router;




