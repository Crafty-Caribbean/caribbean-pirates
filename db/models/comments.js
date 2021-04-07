const db = require('../index.js');

module.exports = {
  getComments(patternId, callback) {
    const query = `SELECT id, username, content, created_at
                   FROM comments
                   WHERE pattern_id=${patternId}`;
    db.connect((err, client, release) => {
      if (err) {
        console.error('Error getting comment', err.stack);
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

  addComment(patternId, username, content, callback) {
    const query = {
      text: 'INSERT INTO comments(pattern_id, username, content) VALUES ($1, $2, $3);',
      values: [patternId, username, content],
    };
    db.connect((err, client, release) => {
      if (err) {
        console.error('Error adding comment', err.stack);
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
