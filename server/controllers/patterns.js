const patternsModels = require('../../db/models/patterns');

module.exports = {
  getOnePattern(req, res) {
    patternsModels.getOnePattern(req.params.pattern_id, (err, results) => {
      if (err) {
        res.status(404).send('Fail to get pattern data', err);
      }
      res.status(200).send(results.rows[0]);
    });
  },
};
