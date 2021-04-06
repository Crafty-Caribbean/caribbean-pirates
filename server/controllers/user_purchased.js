const userPurchasedModels = require('../../db/models/user_purchased');

module.exports = {
  addPurchasePattern(req, res) {
    userPurchasedModels.addPurchasePattern(
      Number(req.params.user_id),
      Number(req.body.pattern_id),
      (err) => {
        if (err) {
          console.error(err);
          res.status(400).send('Failed purchasing the pattern');
        }
        res.status(201).send(`User ${req.params.user_id} purchased pattern ${req.body.pattern_id}`);
      },
    );
  },
};
