const router = require('express').Router();
const recipeC = require('../controllers/recipeC');
const viewsC = require('../controllers/viewsC');
const cuisinesC = require('../controllers/cuisinesC');

router.get('/:id', cuisinesC.index, cuisinesC.getOne, cuisinesC.cuisineGroupings, viewsC.recipesByCuisine)

router.get('/', (req,res) => {
	res.redirect('cuisines/14')
})

module.exports = router;