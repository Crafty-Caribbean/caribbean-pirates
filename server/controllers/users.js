const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const usersModels = require('../../db/models/users');
const validation = require('../../db/db_validation');
require('dotenv').config();

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

  signUp(req, res) {
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
                res.status(401).send('Failed signing up the user');
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

  login(req, res) {
    if (validation.isEmail(req.body.email)) {
      usersModels.getOneUser(req.body.email, (err, results) => {
        if (err) {
          console.error(err);
          res.status(401).send('Failed logging in');
        } else if (results.rows.length > 0) {
          bcrypt.compare(req.body.password, results.rows[0].password)
            .then((result) => {
              if (result) {
                const jwtToken = jwt.sign({
                  username: results.rows[0].username,
                  user_id: results.rows[0].id,
                }, process.env.TOPGUN, {
                  expiresIn: '1h',
                });
                res.cookie('token', jwtToken, { httpOnly: true });
                res.status(200).send({
                  token: jwtToken,
                  expiresIn: 30,
                  msg: {
                    username: results.rows[0].username,
                    user_id: results.rows[0].id,
                  },
                });
              } else {
                console.log('password not match');
                res.status(400).send('Password not match');
              }
            })
            .catch((error) => res.status(404).send(error));
        } else {
          res.status(401).send('User not found');
        }
      });
    } else {
      console.log('the email is not riight');
      res.status(400).send('The email is not in the right format');
    }
  },
};
