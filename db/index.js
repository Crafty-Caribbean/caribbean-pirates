const { Pool } = require('pg');
require('dotenv').config();

module.exports = new Pool({
  host: process.env.POSTGRESHOST,
  port: 5432,
  user: 'postgres',
  database: 'stitchsaver',
  password: process.env.POSTGRESPASSWORD,
});
