module.exports = {

	indexR(req,res) {
		res.render('recipes/index')
	},

	editForm(req,res) {
		res.render('recipes/editPage', {
			data: res.locals.recipe
		})
	},

	handleCreate(req, res) {
    	res.redirect('/recipes');

  	},

  	handleUpdate(req,res) {
    	res.redirect('/recipes');
  	},

  	searchPage(req,res) {
  		res.render('search/index')
  	},

  	// /cuisines

  	cuisinesIndex(req,res) {
		res.render('cuisines/index', {
			data: res.locals.cuisinesGrouped
		})
	},

	recipesByCuisine(req,res) {
		res.render('cuisines/recipesByCuisine', {
			data: res.locals.cuisinesGrouped
		})
	}

};

