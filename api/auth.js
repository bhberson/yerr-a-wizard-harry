'use strict';

function auth(req, res){
	let key = req.get('api-key');
	if ('I solemnly swear that I am up to no good' != key) {
		res.status(401).send('Messrs Moony, Wormtail, Padfoot and Prongs claim this is an invalid passphrase!')
	}

};

module.exports = auth;