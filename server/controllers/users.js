const bcrypt = require('bcrypt');
const usersModels = require('../../db/models/users');
const validation = require('../../db/db_validation');

const saltRounds = 12;

module.exports = {
  getUserPatternList(req, res) {
    usersModels.getUserPatterns(req.params.user_id, (err, results) => {
      if (err) {
        res.status(404).send('Fail to get user data', err);
      }
      res.status(200).send(results.rows[0]);
    });
  },

  addUser(req, res) {
    if (validation.isEmail(req.body.email)
    && validation.isUsername(req.body.username)
    && !Number.isNaN(req.body.age)) {
      bcrypt.genSalt(saltRounds, (err, salt) => {
        if (err) {
          console.error(err);
        }
        bcrypt.hash(req.body.password, salt, (error, hash) => {
          if (error) {
            console.error(error);
          }
          usersModels.addUser(
            req.body.email,
            req.body.username,
            req.body.age,
            hash,
            (queryError) => {
              if (err) {
                console.error(queryError);
                res.status(404).send('Failed signing up the user');
              }
              res.status(201).send('Created');
            },
          );
        });
      });
    } else {
      res.status(404).send('Please check the input format');
    }
  },
};
