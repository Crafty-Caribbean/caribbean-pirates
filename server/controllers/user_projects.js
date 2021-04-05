const userProjectsModels = require('../../db/models/user_projects');

module.exports = {
  userAddProject(req, res) {
    userProjectsModels.addProject(req.params.user_id,
      req.body.pattern_id, (err) => {
        if (err) {
          console.error(err);
          res.status(400).send('Failed adding project');
        }
        res.status(201).send(`Added project into user ${req.params.user_id}`);
      });
  },
};
