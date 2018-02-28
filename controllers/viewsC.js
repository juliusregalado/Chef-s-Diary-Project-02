module.exports = {

	index(req,res) {
		res.render('recipes/index', {
			data: res.locals.recipes
		})
	},
	editForm(req,res) {
		res.render('recipes/editForm', {
			data: res.locals.recipe
		})
	}

};

