const db = require('../index.js');

module.exports = {
  getComments(patternId, callback) {
    const query = {
      text: 'SELECT id, username, content, created_at FROM comments WHERE pattern_id=$1',
      values: [patternId],
    };
    db.connect((err, client, release) => {
      if (err) {
        console.error('Error getting comment', err.stack);
      } else {
        client.query(query, (error, result) => {
          release();
          if (error) {
            callback(err.stack);
          } else {
            callback(null, result);
          }
        });
      }
    });
  },

  getAllComments(callback) {
    const query = 'SELECT id, username, content, created_at FROM comments;';
    db.connect((err, client, release) => {
      if (err) {
        console.error('Error getting all comments', err.stack);
      } else {
        client.query(query, (error, result) => {
          release();
          if (error) {
            callback(err.stack);
          } else {
            callback(null, result);
          }
        });
      }
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
      } else {
        client.query(query, (error, result) => {
          release();
          if (error) {
            callback(err.stack);
          } else {
            callback(null, result);
          }
        });
      }
    });
  },
};
