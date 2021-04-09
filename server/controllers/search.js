const searchModels = require('../../db/models/search');

module.exports = {
  getSearchResult(req, res) {
    searchModels.getResults(req.query.keyword.toLowerCase(), (err, results) => {
      if (err) {
        console.error(err);
        res.status(400).send('Failed getting results');
      }
      res.status(200).send(results.rows[0].results);
    });
  },
};
