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

  deleteOnePattern(req, res) {
    patternsModels.deleteOnePattern(Number(req.params.pattern_id), (err) => {
      if (err) {
        console.error(err);
        res.status(401).send('Error deleting project');
      }
      res.status(201).send('Project deleted');
    });
  },

  addPattern(req, res) {
    patternsModels.addOnePattern(
      Number(req.body.user_id),
      req.body.title,
      req.body.craft_type,
      req.body.skill_level,
      req.body.price,
      req.body.description,
      req.body.images, (err) => {
        if (err) {
          console.error(err);
          res.status(401).send('Error adding pattern');
        }
        res.status(201).send('Pattern created');
      },
    );
  },
};
