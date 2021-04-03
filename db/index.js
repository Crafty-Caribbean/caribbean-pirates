const { Pool } = require('pg');

module.exports = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  database: 'stitchSaver',
  password: '123456789',
});
