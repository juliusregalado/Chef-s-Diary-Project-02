const config = process.env.DATABASE_URL || {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
};

module.exports = config;


/*
module.exports = {
	host: 'localhost',
	port: 5432,
	database: 'chefs_diary_db'	
}
*/