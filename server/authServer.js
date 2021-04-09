const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');
const router = require('./routes.js');
const usersModels = require('../db/models/users');
const users = require('./controllers/users');
const auth = require('./auth');
require('dotenv').config();

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use('/api', router);
app.use('/*', express.static(path.join(__dirname, '/../client/dist')));

app.post('/token', (req, res) => {
  const refreshToken = req.body.token;
  if (refreshToken === null) {
    res.status(401).send('No token');
  }
  usersModels.getUserToken(refreshToken, (err, result) => {
    if (err) {
      res.status(403).send('Error in getting token');
    } else {
      if (result.rows.length === 0) {
        res.status(403).send('Token is not match');
      }
      jwt.verify(refreshToken, process.env.REFRESH_TOEKN_SECRET, (error, user) => {
        if (error) {
          res.status(403).send('Error in verifying the token');
        }
        const accessToken = auth.generateAccessToken({
          user_id: user.user_id,
          username: user.username,
        });
        res.status(200).send({ accessToken });
      });
    }
  });
});

app.post('/login', users.login);

app.delete('/logout', (req, res) => {
  usersModels.deleteUserToken(req.body.token, (err) => {
    if (err) {
      res.send('Error logging out');
    }
    res.status(204).send('Token deleted');
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
