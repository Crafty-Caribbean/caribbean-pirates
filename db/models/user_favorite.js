const db = require('../index.js');

module.exports = {
  addFavoritePattern(userId, patternId, callback) {
    const query = `INSERT INTO public.user_favorite(
      user_id, pattern_id)
      VALUES (${userId}, ${patternId});`;
    db.connect((err, client, release) => {
      if (err) {
        console.error('Error adding favorite pattern', err.stack);
      }
      client.query(query, (error, results) => {
        release();
        if (err) {
          callback(err.stack);
        }
        callback(null, results);
      });
    });
  },
};
