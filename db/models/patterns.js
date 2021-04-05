const db = require('../index.js');

module.exports = {
  getOnePattern(patternId, callback) {
    const query = `SELECT p.id,
                          p.title AS name,
                          json_build_object(
                            'id', (SELECT u.id FROM users u WHERE u.id=p.author_id),
                            'username', (SELECT u.username FROM users u WHERE u.id=p.author_id)
                        ) AS author,
                        p.skill_level,
                        p.craft_type,
                        p.description,
                        p.price,
                        p.images
                      FROM patterns p
                      WHERE p.id=${patternId};`;
    db.connect((err, client, release) => {
      if (err) {
        console.error('Error getting user information', err.stack);
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
