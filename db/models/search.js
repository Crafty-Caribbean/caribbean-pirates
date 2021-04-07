const db = require('../index.js');

module.exports = {
  getResults(keyword, callback) {
    const matchKeyword = `%${keyword}%`;
    const query = {
      text: `SELECT json_build_object(
        'users', (SELECT COALESCE(json_agg(users), '[]'::json)
                  FROM (SELECT id, username
                  FROM users
                  WHERE username LIKE $1) AS users),
        'patterns', (SELECT COALESCE(json_agg(patterns), '[]'::json)
                     FROM (SELECT id, title
                     FROM patterns
                     WHERE title LIKE $2) AS patterns)) AS results`,
      values: [matchKeyword, matchKeyword],
    };
    db.connect((err, client, release) => {
      if (err) {
        console.error('Error getting data', err.stack);
      }
      client.query(query, (error, result) => {
        release();
        if (error) {
          callback(err.stack);
        }
        callback(null, result);
      });
    });
  },
};
