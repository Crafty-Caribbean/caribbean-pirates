const db = require('../index.js');

module.exports = {
  getUserPatterns(userId, callback) {
    const query = {
      text: `
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
                          p.price,
                           (SELECT username FROM users WHERE users.id=p.author_id) AS author,
                                uf.created_at AS liked_at
                      FROM patterns p, user_favorite uf
                      WHERE p.id=uf.pattern_id
                      AND p.deleted=false AND uf.user_id=u.id) AS favorites),
                'projects', (SELECT COALESCE(json_agg(projects), '[]'::json)
                   FROM (SELECT p.id,
                          p.title,
                          p.craft_type,
                          p.skill_level AS difficulty,
                          p.images,
                          p.price,
                         (SELECT username FROM users WHERE users.id=p.author_id) AS author,
                              up.id AS project_id,
                              up.progress,
                              up.created_at AS started_at,
                              up.completed_at
                      FROM patterns p, user_projects up
                      WHERE p.id=up.pattern_id
                      AND up.deleted=false AND up.user_id=u.id) AS projects),
                 'created', (SELECT COALESCE(json_agg(created), '[]'::json)
                   FROM (SELECT p.id,
                          p.title,
                          p.craft_type,
                          p.skill_level AS difficulty,
                          p.images,
                          p.price,
                         (SELECT username FROM users WHERE users.id=p.author_id) AS author,
                             p.created_at
                      FROM patterns p
                      WHERE p.deleted=false AND u.id=p.author_id) AS created)
               ) patterns
    FROM users u
    WHERE u.id=$1;`,
      values: [userId],
    };
    db.connect((err, client, release) => {
      if (err) {
        console.error('Error getting user information', err.stack);
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

  addUser(email, username, age, password, callback) {
    const query = {
      text: 'INSERT INTO users (email, username, age, password, image) VALUES ($1, $2, $3, $4, $5);',
      values: [email, username, age, password, ''],
    };
    db.connect((err, client, release) => {
      if (err) {
        console.error('Error adding user', err.stack);
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

  getOneUser(email, callback) {
    const query = {
      text: 'SELECT * FROM users WHERE email=$1',
      values: [email],
    };
    db.connect((err, client, release) => {
      if (err) {
        console.error('Error adding user', err.stack);
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

  addUserToken(userId, token, callback) {
    const query = {
      text: 'INSERT INTO user_token (user_id, token) VALUES ($1, $2);',
      values: [userId, token],
    };
    db.connect((err, client, release) => {
      if (err) {
        console.error('Error adding token', err.stack);
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

  getUserToken(token, callback) {
    const query = {
      text: 'SELECT * FROM user_token WHERE token=$1;',
      values: [token],
    };
    db.connect((err, client, release) => {
      if (err) {
        console.error('Error finding token', err.stack);
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

  deleteUserToken(token, callback) {
    const query = {
      text: 'DELETE FROM public.user_token WHERE token=$1;',
      values: [token],
    };
    db.connect((err, client, release) => {
      if (err) {
        console.error('Error finding token', err.stack);
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
