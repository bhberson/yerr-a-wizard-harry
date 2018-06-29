'use strict';
let models = require('./models/index.js');
let auth = require('./auth.js');
let express = require('express');
let router = express.Router();

// post a new potion
router.post('/', (req, res) =>{
	auth(req, res);
	let model = req.body;
	let potion = new models.potion(model);      
	console.log(potion);
	potion.save(function(err, createdPotion) {
	    if (err)
	        res.send(err + ' error saving potion!');

	    res.json({ _id: createdPotion._id });
	});
});

// get all characters 
router.get('/', (req, res) => {
	auth(req, res);
	models.potion.find({}, function(err, docs){
		res.send(docs);
	})

});

// get potion by ID
router.get('/:potion_id', (req, res) =>{
	auth(req, res);
	models.potion.findById(req.params.potion_id, (err, potion) =>{
		if (err)
			res.send(err);
		res.json(potion);
	});
});

// update potion 
router.put('/:potion_id', (req, res) =>{
	auth(req, res);
	models.potion.findById(req.params.potion_id, (err, potion)=>{
		if (err)
			res.send(err);

		potion = Object.assign(potion, req.body);

		potion.save((err) =>{
			if (err)
				res.send(err);
			res.json({message: 'potion updated!'});
		});

	});
});

// delete potion
router.delete('/:potion_id', (req, res) =>{
	auth(req, res);
	models.potion.remove({
		_id: req.params.character_id
	}, (err, potion) =>{
		if (err)
			res.send(err);
		res.json({message: 'Successfully deleted!'});
	});
});


module.exports = router;




