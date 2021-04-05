const db = require('../index.js');

module.exports = {
  getUserPatterns(userId, callback) {
    const query = `
    SELECT u.id,
           u.image,
           u.username,
         json_build_object(
                 'favorites', (SELECT COALESCE(json_agg(favorites), '[]'::json)
                   FROM (SELECT p.id,
                          p.title,
                          p.craft_type,
                          p.skill_level AS difficulty,
                          p.images,
                           (SELECT username FROM users WHERE users.id=p.author_id) AS author,
                                uf.created_at AS liked_at
                      FROM patterns p, user_favorite uf
                      WHERE p.id=uf.pattern_id
                      AND uf.user_id=u.id) AS favorites),
                'projects', (SELECT COALESCE(json_agg(projects), '[]'::json)
                   FROM (SELECT p.id,
                          p.title,
                          p.craft_type,
                          p.skill_level AS difficulty,
                          p.images,
                         (SELECT username FROM users WHERE users.id=p.author_id) AS author,
                              up.progress,
                              up.created_at AS started_at,
                              up.completed_at
                      FROM patterns p, user_projects up
                      WHERE p.id=up.pattern_id
                      AND up.user_id=u.id) AS projects),
                 'created', (SELECT COALESCE(json_agg(created), '[]'::json)
                   FROM (SELECT p.id,
                          p.title,
                          p.craft_type,
                          p.skill_level AS difficulty,
                          p.images,
                         (SELECT username FROM users WHERE users.id=p.author_id) AS author,
                             p.created_at
                      FROM patterns p
                      WHERE u.id=p.author_id) AS created)
               ) patterns
    FROM users u
    WHERE u.id=${userId};`;
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

  addUser(email, username, age, password, callback) {
    const query = `INSERT INTO users (email, username, age, password, image) VALUES
    (${email}, ${username}, ${age}, ${password}, '');`;
    db.connect((err, client, release) => {
      if (err) {
        console.error('Error adding user', err.stack);
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
