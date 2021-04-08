const db = require('../index.js');

module.exports = {
  getOnePattern(patternId, callback) {
    const query = {
      text: `SELECT p.id,
                          p.title AS name,
                          json_build_object(
                            'id', (SELECT u.id FROM users u WHERE u.id=p.author_id),
                            'username', (SELECT u.username FROM users u WHERE u.id=p.author_id),
                            'profile_pic', (SELECT u.image FROM users u WHERE u.id=p.author_id)
                        ) AS author,
                        p.skill_level,
                        p.craft_type,
                        p.description,
                        p.price,
                        p.images,
                        (SELECT COALESCE(json_agg(comments), '[]'::json)
                        FROM (SELECT c.id,
                                     c.username,
                                     c.content,
                                     c.created_at
                              FROM comments c
                              WHERE c.pattern_id=p.id) AS comments) AS comments
                   FROM patterns p
                   WHERE p.deleted=false AND p.id=$1`,
      values: [patternId],
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

  getAllPatterns(count, offset, callback) {
    const query = `SELECT * FROM patterns
                   WHERE reported=false
                   ORDER BY created_at DESC
                   LIMIT ${count} OFFSET ${offset};`;
    db.connect((err, client, release) => {
      if (err) {
        console.error('Error getting patterns', err.stack);
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

  deleteOnePattern(patternId, callback) {
    const query = {
      text: 'UPDATE patterns SET deleted=true WHERE id=$1',
      values: [patternId],
    };
    db.connect((err, client, release) => {
      if (err) {
        console.error('Error deleting patterns', err.stack);
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

  addOnePattern(authorId, title, craftType, skillLevel, price, description, images, callback) {
    const query = {
      text: 'INSERT INTO public.patterns(author_id, title, craft_type, skill_level, price, description, images) VALUES ($1, $2, $3, $4, $5, $6, $7);',
      values: [authorId, title, craftType, skillLevel, price, description, images],
    };
    db.connect((err, client, release) => {
      if (err) {
        console.error('Error adding pattern', err);
      } else {
        client.query(query, (error, result) => {
          release();
          if (error) {
            callback(error);
          } else {
            callback(null, result);
          }
        });
      }
    });
  },
};
