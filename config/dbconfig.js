module.exports = process.env.DATABASE_URL || {
  host:     process.env.DB_HOST || 'localhost',
  port:     process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'chefs_diary_db',
  /* user:     process.env.DB_USER, */
};


/*
module.exports = {
	host: 'localhost',
	port: 5432,
	database: 'chefs_diary_db'	
}
*/