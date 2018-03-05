const pgp = require('pg-promise')();
const dbConfig = require('../config/dbConfig');
const db = pgp(dbConfig);

module.exports = {

  	findAll() {
    	return db.any('SELECT * FROM cuisines ORDER BY cuisine');
 	},

 	findById(id) {
    return db.one(`
      	SELECT *
      	FROM cuisines
      	WHERE id = $1`, id)
 	},

 	getAllRecipesByCuisine(id) {
 		return db.any(`SELECT cuisines.id AS id, cuisine, description, recipe_name FROM recipes
 			JOIN cuisines ON recipes.cuisine_id=cuisines.id
 			WHERE cuisines.id=$1`,id)
 	}
};


