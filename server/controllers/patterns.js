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

  getAllPatterns(req, res) {
    let count = 50;
    let page = 0;
    if (req.query.count !== undefined) {
      count = req.query.count;
    }
    if (req.query.page !== undefined) {
      page = req.query.page;
    }
    const offset = count * page;
    patternsModels.getAllPatterns(count, offset, (err, results) => {
      if (err) {
        res.status(404).send('Fail to get patterns', err);
      }
      res.status(200).send(results.rows);
    });
  },
};
