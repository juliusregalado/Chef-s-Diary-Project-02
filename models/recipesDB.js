// const pgp = require('pg-promise')();
const db = require('../config/config');
// const db = pgp(dbConfig);

module.exports = {

	findAll() {
    return db.many(`
      	SELECT recipes.id AS id, recipe_name, ingredients, instructions, cuisine, cuisine_id
        FROM recipes JOIN cuisines ON recipes.cuisine_id=cuisines.id
      	ORDER BY recipes.recipe_name`);
	},

	findById(id) {
    return db.one(`
      	SELECT *
      	FROM recipes
      	WHERE id = $1`, id);
  	},

  	create(recipe) {
  		return db.one(`
      	INSERT INTO recipes(recipe_name, ingredients, instructions, cuisine_id)
      	VALUES ($/recipe_name/, $/ingredients/, $/instructions/, $/cuisine_id/)
      	RETURNING *`, recipe);  	
  	},

  	update(recipe) {
  		return db.one(`
  			UPDATE recipes
  			SET recipe_name = $/recipe_name/,
        ingredients = $/ingredients/,
        instructions = $/instructions/,
        cuisine_id = $/cuisine_id/
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