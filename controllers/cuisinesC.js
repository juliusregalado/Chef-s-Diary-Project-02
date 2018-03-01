const cuisinesDB = require('../models/cuisinesDB');

module.exports = {

	index(req, res, next) {
    cuisinesDB.findAll()
      .then((results) => {
        res.locals.cuisinesito = results;
        next();
      })
      .catch(err => next(err));
  }
};