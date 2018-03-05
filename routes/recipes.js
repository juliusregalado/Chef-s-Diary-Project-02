const router = require('express').Router();
const recipeC = require('../controllers/recipeC');
const viewsC = require('../controllers/viewsC');
const cuisinesC = require('../controllers/cuisinesC');

router.get('/', cuisinesC.index, recipeC.index, viewsC.indexR);

router.get('/:id/edit', cuisinesC.index, recipeC.getOne, viewsC.editForm);

router.post('/add',  recipeC.create, cuisinesC.index, viewsC.indexR);

router.put('/:id', recipeC.update, viewsC.handleUpdate);

router.delete('/delete/:id', recipeC.delete);

module.exports = router;