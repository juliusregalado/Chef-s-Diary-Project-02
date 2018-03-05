const router = require('express').Router();
const viewsC = require('../controllers/viewsC');
const searchC = require('../controllers/searchC')

router.get('/', viewsC.searchPage)

router.get('/results', viewsC.searchPage)

module.exports = router;
