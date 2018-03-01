module.exports = {

	index(req,res) {
		res.render('recipes/index')
	},

	editForm(req,res) {
		res.render('recipes/editForm', {
			data: res.locals.recipe
		})
	},

	handleCreate(req, res) {
    	res.redirect('/recipes');
  	},

  	handleUpdate(req,res) {
    	res.redirect('/recipes');
  	}

};

