const jwt = require('jsonwebtoken');

require('dotenv').config();

module.exports = {
  authenticateToken(req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (token === null) {
      res.status(401).send('No token');
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        res.status(403).send('Error in verifying the token');
      } else if (req.params.user_id === user.user_id) {
        next();
      } else {
        res.status(401).send('User ID does not match');
      }
    });
  },
  generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' });
  },

};
