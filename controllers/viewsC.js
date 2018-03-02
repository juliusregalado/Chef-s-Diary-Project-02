module.exports = {

	index(req,res) {
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
  	}

};

