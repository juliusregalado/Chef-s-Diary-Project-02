DROP TABLE IF EXISTS recipes;
DROP TABLE IF EXISTS cuisines;

CREATE TABLE cuisines (
  	id SERIAL PRIMARY KEY,
  	cuisine VARCHAR NOT NULL,
  	date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE recipes (
	id SERIAL PRIMARY KEY,
	recipe_name VARCHAR NOT NULL,
	ingredients VARCHAR NOT NULL,
	instructions VARCHAR NOT NULL,
	cuisine_id INTEGER REFERENCES cuisines,
	date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX ON recipes (recipe_name);