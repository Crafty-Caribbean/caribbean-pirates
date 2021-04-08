const db = require('../index.js');

module.exports = {
  addPurchasePattern(userId, patternId, callback) {
    const query = {
      text: 'INSERT INTO public.user_purchased(user_id, pattern_id)VALUES ($1, $2);',
      values: [userId, patternId],
    };
    db.connect((err, client, release) => {
      if (err) {
        console.error('Error purchasing the pattern', err.stack);
      } else {
        client.query(query, (error, results) => {
          release();
          if (error) {
            callback(error.stack);
          } else {
            callback(null, results);
          }
        });
      }
    });
  },

};
