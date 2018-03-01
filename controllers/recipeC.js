const recipesDB = require('../models/recipesDB')

module.exports = {
	
	index(req,res,next) {
		recipesDB.findAll()
			.then((recipes)=> {
				res.locals.recipesiol = recipes
				next()
			})
			.catch(err => {
				next(err)
			})
	},

	getOne(req,res,next) {
		recipesDB.findById(req.params.id)
			.then((recipe) => {
				res.locals.recipe = recipe
				next()
			})
			.catch(err => next(err))
	},

	create(req,res,next) {
		console.log('yoooo ransB')
		recipesDB.create(req.body)
		console.log('yyoooooooo',req.body)
			.then((recipe) => {
				res.locals.recipes = recipe
				next()
			})
			.catch(err => {
				next(err)
			})
	},

	update(req,res,next) {
		recipesDB.update(req.body)
			.then((recipe) => {
				res.locals.recipes = recipe
				next()
			})
			.catch(err => {
				next(err)
			})
	},

	delete(req,res,next) {
		recipesDB.destroy(req.params.id)
			.then(()=> { 
				res.redirect('/recipes') 
				next()
			})
			.catch(err => {
				next(err)
			})
	}

};