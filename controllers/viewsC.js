module.exports = {

	index(req,res) {
		res.render('recipes/index')
		data: res.locals.recipes
	},

	save(quote) {
    return db.one(`
      	INSERT INTO quotes (author, content, genre_type)
      	VALUES ($/author/, $/content/, $/genre_type/)
      	RETURNING *
      	`, quote);
  },

}