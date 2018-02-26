module.exports = {

	index(req,res) {
		res.render('recipes/index')
		data: res.locals.recipes
	}

}