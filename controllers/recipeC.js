const recipesDB = require('../models/recipesDB')

module.exports = {
	
	index(req,res,next) {
		console.log('recipe list');
		recipesDB.findAll()
			.then((recipes)=> {
				console.log(recipes)
				res.locals.recipes = recipes
				next()

			})
			.catch(err => {
				next(err)
			})
	},

	create(req,res) {
		console.log('add body');
		res.redirect('/');
	}
	/*
	delete(req,res) {
		console.log('deleting', req.body)
		res.redirect('/')
	}
	*/
};