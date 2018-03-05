const pgp = require('pg-promise')();

const config = process.env.DATABASE_URL || {
  host:     process.env.PG_HOST || 'localhost',
  port:     process.env.PG_PORT || 5432,
  database: process.env.PG_DATABASE || 'chefs_diary_db',
};

// const dbConfig = require('../config/config');
const db = pgp(config);


module.exports = db;