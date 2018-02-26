DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS recipes;

CREATE TABLE users (
  	id SERIAL PRIMARY KEY,
  	user_name VARCHAR NOT NULL,
  	email VARCHAR NOT NULL,
  	password VARCHAR NOT NULL,
  	date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE recipes (
	id SERIAL PRIMARY KEY,
	recipe_name VARCHAR NOT NULL,
	ingredients VARCHAR NOT NULL,
	instructions TEXT,
	user_id INTEGER REFERENCES users,
	date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX ON users (email);
CREATE INDEX ON recipes (recipe_name);