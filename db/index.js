const { Pool } = require('pg');

module.exports = new Pool({
  host: 'ec2-54-183-32-117.us-west-1.compute.amazonaws.com',
  port: 5432,
  user: 'postgres',
  database: 'stitchsaver',
  password: '123456789',
});
