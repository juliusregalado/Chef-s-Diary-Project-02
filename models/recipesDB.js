const pgp = require('pg-promise')();
const dbconfig = require('../config/dbconfig');
const db = pgp(dbconfig);

module.exports = {

	findAll() {
		return db.many(`SELECT * FROM recipes`);
	},

	findById(id) {
    return db.one(`
      	SELECT *
      	FROM quotes
      	WHERE id = $1
      	`, id);
  	}
}