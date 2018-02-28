const router = require('express').Router();
const recipeC = require('../controllers/recipeC')
const viewsC = require('../controllers/viewsC')

router.get('/', recipeC.index, viewsC.index);

router.get('/:id/edit', recipeC.getOne, viewsC.editForm);

router.post('/add', recipeC.create);

router.put('/:id', recipeC.update)

router.delete('/delete/:id', recipeC.delete)

module.exports = router; 