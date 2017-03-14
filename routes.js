var express = require('express');
var router = express.Router();
var User = require('./node-token-auth/reg/user');
var cons = require('tracer').console();

var isRightList = function(lists, list){
        return _.find(lists, function(obj) { return obj.lid == list })
}

module.exports = function(passport){
	router.get('/api/dog/', function(req, res) {
		res.jsonp('You are a dog, Uli')
	});	
	
	router.get('/api/users/:name', 
		passport.authenticate('bearer', { session: false }), 
		function(req, res) {
			console.log('in find user by name');
			var name = req.params.name.toLowerCase();
			console.log(name)
			User.findOne({name: name}, function(err, items) {
				console.log(items)
				if (items != null && items.name == name) {
					console.log(items)
					res.jsonp({message:'success', items:items});
				} else {
					res.jsonp({
						message: 'error'
					});
				}
			});		
		});
	router.delete('/api/users/:name',
		passport.authenticate('bearer', { session: false }),  
		function(req, res) {
			console.log('in delete user by name');
			console.log(req.params);
			var name = req.params.name;
			User.findOneAndRemove({name: name}, function(err, result) {
				console.log(result)
					if (err) {
						res.jsonp(err)
					} else {
						res.jsonp(result)
					};	
				});				
		});

	return router;
}