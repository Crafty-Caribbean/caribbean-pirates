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

  deletePurchasedPattern(userId, patternId, callback) {
    const query = {
      text: 'UPDATE user_purchased SET deleted=true WHERE user_id=$1 AND pattern_id=$2;',
      values: [userId, patternId],
    };
    db.connect((err, client, release) => {
      if (err) {
        console.error('Error deleting the purchased pattern', err.stack);
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

  findPurchasedPattern(userId, callback) {
    const query = {
      text: 'SELECT * FROM public.user_purchased WHERE user_id=$1',
      values: [userId],
    };
    db.connect((err, client, release) => {
      if (err) {
        console.error('Error connecting to db', err.stack);
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
