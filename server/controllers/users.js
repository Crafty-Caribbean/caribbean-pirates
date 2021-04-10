const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const usersModels = require('../../db/models/users');
const validation = require('../../db/db_validation');
const auth = require('../auth');
require('dotenv').config();

const saltRounds = 12;

module.exports = {
  getUserPatternList(req, res) {
    usersModels.getUserPatterns(req.params.user_id, (err, results) => {
      if (err) {
        res.status(404).send('Fail to get user data', err);
      }
      console.log(results.rows);
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
          res.status(401).send('Failed signing up the user');
        }
        bcrypt.hash(req.body.password, salt, (error, hash) => {
          if (error) {
            console.error(error);
            res.status(401).send('Failed signing up the user');
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
                const user = {
                  user_id: results.rows[0].id,
                  username: results.rows[0].username,
                };
                const accessToken = auth.generateAccessToken(user);
                const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
                res.cookie('refreshToken', refreshToken, { httpOnly: true });
                console.log(refreshToken);
                usersModels.addUserToken(results.rows[0].id, refreshToken, (tokenErr) => {
                  if (tokenErr) {
                    res.status(403).send('Error storing token');
                  } else {
                    res.status(200).send({ accessToken, refreshToken });
                  }
                });
              } else {
                console.log('password does not match');
                res.status(400).send('Password not match');
              }
            })
            .catch((error) => res.status(404).send(error));
        } else {
          res.status(401).send('User not found');
        }
      });
    } else {
      console.log('the email is not right');
      res.status(400).send('The email is not in the right format');
    }
  },
};
