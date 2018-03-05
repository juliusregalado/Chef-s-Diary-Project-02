const cuisinesDB = require('../models/cuisinesDB');

module.exports = {

	index(req, res, next) {
    cuisinesDB.findAll()
      .then((results) => {
        res.locals.cuisinesito = results;
        next()
      })
      .catch(err => next(err));
  },

  cuisineGroupings(req,res,next) {
  	cuisinesDB.getAllRecipesByCuisine(req.params.id)
  		.then((results) => {
  			res.locals.cuisineGrouped = results
  				next()
  			})
  			.catch(err => next(err));
  },

  getOne(req,res,next) {
    cuisinesDB.findById(req.params.id)
      .then((results) => {
        res.locals.cuisineOne = results
        next()
      })
      .catch(err => next(err))
  }



};