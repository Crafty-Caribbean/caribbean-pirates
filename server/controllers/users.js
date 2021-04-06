const usersModels = require('../../db/models/users');

module.exports = {
  getUserPatternList(req, res) {
    console.log('hi', req.params.user_id);
    usersModels.getUserPatterns(req.params.user_id, (err, results) => {
      if (err) {
        res.status(404).send('Fail to get user data', err);
      }
      res.status(200).send(results.rows[0]);
    });
  },
};
