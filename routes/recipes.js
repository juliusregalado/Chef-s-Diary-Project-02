const router = require('express').Router();
const recipeC = require('../controllers/recipeC')

router.get('/', recipeC.index);
//router.post('/add', recipeC.create);
//router.delete('/delete/:id', recipeC);
//router.post('/edit', recipeC);

module.exports = router; 