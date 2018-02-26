const pgp = require('pg-promise')();
const dbconfig = require('../config/dbconfig');
const db = pgp(dbconfig);

module.exports = {

	findAll() {
		return db.many(`SELECT * FROM recipes`);
	}

}