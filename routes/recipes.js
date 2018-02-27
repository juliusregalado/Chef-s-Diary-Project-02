const router = require('express').Router();
const recipeC = require('../controllers/recipeC')
const viewsC = require('../controllers/viewsC')

router.get('/', recipeC.index, viewsC.index);

router.post('/add', (req,res) => {
	db.one(`INSERT INTO RECIPES(name, ingredients, instructions)
		   VALUES($1,$2,$3)`,
		   [
		   req.body.name,
		   req.body.ingredients,
		   req.body.instructions
		   ]);
});

router.delete('/delete/:id', (req,res) => {
	db.one(`DELETE FROM recipes WHERE id=$1`,
			[
			req.params.id
			]);
});

router.post('/edit', (req,res) => {
	db.one(`UPDATE recipes SET name=$1, ingredients=$2, instructions=$3
			WHERE id=$4`,
			[
			req.body.name,
			req.body.ingredients,
			req.body.instructions,
			req.body.id
			]);
});

module.exports = router; 