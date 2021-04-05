const db = require('../index.js');

module.exports = {
  addProject(userId, patternId, callback) {
    const query = `INSERT INTO public.user_projects(
      user_id, pattern_id)
      VALUES (${userId}, ${patternId});`;
    db.connect((err, client, release) => {
      if (err) {
        console.error('Error adding favorite pattern', err.stack);
      }
      client.query(query, (error, results) => {
        release();
        if (error) {
          callback(error.stack);
        }
        callback(null, results);
      });
    });
  },
};
