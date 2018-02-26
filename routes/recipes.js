const router = require('express').Router();
const recipeC = require('../controllers/recipeC')
const viewsC = require('../controllers/viewsC')

router.get('/', recipeC.index, viewsC.index);
router.post('/add', recipeC.create);
//router.delete('/delete/:id', recipeC);
//router.post('/edit', recipeC);

module.exports = router; 