const commentsModels = require('../../db/models/comments');

module.exports = {
  getOnePatternComments(req, res) {
    commentsModels.getComments(req.params.pattern_id, (err, results) => {
      if (err) {
        console.error(err);
        res.status(404).send('Error getting comment');
      }
      res.status(200).send(results.rows);
    });
  },

  addComment(req, res) {
    let username;
    if (req.body.username === undefined || req.body.username.trim() === '') {
      username = 'Anonymous';
    } else {
      username = req.body.username;
    }
    commentsModels.addComment(req.params.pattern_id, username, req.body.content, (err) => {
      if (err) {
        console.error(err);
        res.status(401).send('Error adding comment');
      }
      res.status(201).send('Added comment');
    });
  },
};
