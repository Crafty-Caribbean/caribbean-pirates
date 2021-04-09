const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const router = require('./routes.js');
const usersModels = require('../db/models/users');
const users = require('./controllers/users');
const auth = require('./auth');
require('dotenv').config();

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use('/api', router);
app.use('/*', express.static(path.join(__dirname, '/../client/dist')));

app.post('/token', (req, res) => {
  console.log(req.headers);
  console.log(req.cookies);
  console.log(req.cookies.token);
  console.log(req.signedCookies);
  // const refreshToken = req.headers.authorization.split(' ')[1];
  const refreshToken = req.cookies.token;
  console.log('token:', refreshToken);
  if (refreshToken === null) {
    res.status(401).send('No token');
  }
  usersModels.getUserToken(refreshToken, (err, result) => {
    if (err) {
      console.log('getting token')
      res.status(403).send('Error in getting token');
    } else {
      if (result.rows.length === 0) {
        console.log('token not matching')
        res.status(403).send('Token is not match');
        return;
      }
      jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (error, user) => {
        if (error) {
          console.log('verifying token')
          res.status(403).send('Error in verifying the token');
          return;
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
  const refreshToken = req.headers.authorization.split(' ')[1];
  if (refreshToken === null) {
    res.status(401).send('No token');
  }
  usersModels.deleteUserToken(refreshToken, (err) => {
    if (err) {
      res.send('Error logging out');
    }
    res.status(204).send('Token deleted');
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
