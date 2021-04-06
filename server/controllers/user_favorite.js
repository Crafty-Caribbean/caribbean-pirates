const userFavoriteModels = require('../../db/models/user_favorite');

module.exports = {
  addFavorite(req, res) {
    userFavoriteModels.addFavoritePattern(req.params.user_id,
      req.body.pattern_id, (err) => {
        if (err) {
          console.error(err);
          res.status(400).send('Failed adding favorite pattern');
        }
        res.status(201).send(`Added favorite pattern into user ${req.params.user_id}`);
      });
  },

  deleteFavorite(req, res) {
    userFavoriteModels.deleteFavoritePattern(Number(req.params.user_id),
      Number(req.params.pattern_id), (err) => {
        if (err) {
          console.error(err);
          res.status(400).send('Failed adding favorite pattern');
        }
        res.status(201).send(`User ${req.params.user_id} unfavorite pattern ${req.params.pattern_id}`);
      });
  },
};
