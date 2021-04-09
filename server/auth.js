const jwt = require('jsonwebtoken');

require('dotenv').config();

module.exports = {
  authenticateToken(req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (token === null) {
      console.log('no token here');
      res.status(401).send('No token');
      next();
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        console.log('error in verifying token');
        res.status(403).send('Error in verifying the token');
        next();
      } else if (Number(req.params.user_id) === user.user_id) {
        next();
      } else {
        console.log('user id does not match');
        res.status(401).send('User ID does not match');
        next();
      }
    });
  },
  generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' });
  },

};
