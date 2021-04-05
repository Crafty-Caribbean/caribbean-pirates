const pg = require('pg');

const { Pool } = pg;
// const ec2db = 'ec2-54-183-32-117.us-west-1.compute.amazonaws.com';

module.exports = pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  database: 'stitchsaver',
  password: '123456789',
});

pool.connect(() => {
  console.log('connected to db');
});
