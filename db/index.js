const pg, {Pool} = require('pg');

module.exports = pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  database: 'stitchSaver',
  password: '123456789',
});

