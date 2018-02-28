const pgp = require('pg-promise')();
const dbconfig = require('../config/dbconfig');
const db = pgp(dbconfig);

module.exports = {

	findAll() {
		return db.any(`SELECT * FROM recipes`);
	},

	findById(id) {
    return db.one(`
      	SELECT *
      	FROM recipes
      	WHERE id = $1`, id);
  	},

  	create(recipe) {
  		return db.one(`
      		INSERT INTO recipes(recipe_name, ingredients, instructions)
      		VALUES ($/recipe_name/, $/ingredients/, $/instructions/)
      		RETURNING *`, recipe);

  	
  	},

  	update(recipe) {
  		return db.one(`
  			UPDATE recipes
  			SET recipe_name = $/recipe_name/,
  				ingredients = $/ingredients/,
  				instructions = $/instructions/
  				WHERE id = $/id/
  				RETURNING *`, recipe)
  	},

  	destroy(id) {
    	return db.none(`
    		DELETE
        	FROM recipes
       		WHERE id = $1`, id);
    }
  

}