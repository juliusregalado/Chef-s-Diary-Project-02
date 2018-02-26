
module.exports = {
	
	index(req,res) {
		console.log('recipe list');
		res.send('recipe list goes here');
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