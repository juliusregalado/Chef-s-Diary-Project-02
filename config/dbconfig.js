module.exports = process.env.DATABASE_URL || {
  host:     process.env.PG_HOST || 'localhost',
  port:     process.env.PG_PORT || 5432,
  database: process.env.PG_DATABASE || 'chefs_diary_db',
  /* user:     process.env.DB_USER, */
};

/*
const config = process.env.DATABASE_URL || {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
};

module.exports = config;
*/