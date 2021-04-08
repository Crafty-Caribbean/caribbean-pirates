const db = require('../index.js');

module.exports = {
  addFavoritePattern(userId, patternId, callback) {
    const query = {
      text: 'INSERT INTO public.user_favorite(user_id, pattern_id) VALUES ($1, $2)',
      values: [userId, patternId],
    };
    db.connect((err, client, release) => {
      if (err) {
        console.error('Error adding favorite pattern', err.stack);
      }
      client.query(query, (error, results) => {
        release();
        if (error) {
          callback(error.stack);
        } else {
          callback(null, results);
        }
      });
    });
  },

  deleteFavoritePattern(userId, patternId, callback) {
    const query = {
      text: 'DELETE FROM public.user_favorite WHERE pattern_id=$1 AND user_id=$2;',
      values: [patternId, userId],
    };
    db.connect((err, client, release) => {
      if (err) {
        console.error('Error deleting favorite pattern', err.stack);
      }
      client.query(query, (error, results) => {
        release();
        if (error) {
          callback(error.stack);
        } else {
          callback(null, results);
        }
      });
    });
  },
};
