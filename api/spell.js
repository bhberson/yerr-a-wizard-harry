'use strict';
let models = require('./models/index.js');
let auth = require('./auth.js');
let express = require('express');
let router = express.Router();

// post a new spell
router.post('/', (req, res) =>{
	auth(req, res);
	let model = req.body;
	let spell = new models.spell(model);      
	console.log(spell);
	spell.save(function(err) {
	    if (err)
	        res.send(err + ' error saving spell!');

	    res.json({ message: 'Spell created!' });
	});
});

// search
router.post('/search/', (req, res) =>{
	auth(req, res);
	let body = req.body;

	models.spell.findOne({ name: body.name }, (err, spell) =>{
		if (err)
			res.send(err);
		else{
			res.json(spell);
		}
	});
});

// get all characters 
router.get('/', (req, res) => {
	auth(req, res);
	models.spell.find({}, function(err, docs){
		res.send(docs);
	})

});

// get spell by ID
router.get('/:spell_id', (req, res) =>{
	auth(req, res);
	models.spell.findById(req.params.spell_id, (err, spell) =>{
		if (err)
			res.send(err);
		res.json(spell);
	});
});

// update spell 
router.put('/:spell_id', (req, res) =>{
	auth(req, res);
	models.spell.findById(req.params.spell_id, (err, spell)=>{
		if (err)
			res.send(err);

		spell = Object.assign(spell, req.body);

		spell.save((err) =>{
			if (err)
				res.send(err);
			res.json({message: 'spell updated!'});
		});

	});
});

// delete spell
router.delete('/:spell_id', (req, res) =>{
	auth(req, res);
	models.spell.remove({
		_id: req.params.character_id
	}, (err, spell) =>{
		if (err)
			res.send(err);
		res.json({message: 'Successfully deleted!'});
	});
});


module.exports = router;




