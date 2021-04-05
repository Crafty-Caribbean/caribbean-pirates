const userFavoriteModels = require('../../db/models/user_favorite');

module.exports = {
  userAddFavorite(req, res) {
    userFavoriteModels.addFavoritePattern(req.params.user_id,
      req.body.pattern_id, (err, result) => {
        if (err) {
          console.error(err);
          res.status(400).send('Failed adding favorite pattern');
        }
        res.status(201).send(`Added favorite pattern into user ${req.params.user_id}`);
      });
  },
};
