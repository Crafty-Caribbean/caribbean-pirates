const userProjectsModels = require('../../db/models/user_projects');

module.exports = {
  addProject(req, res) {
    userProjectsModels.addProject(
      req.params.user_id,
      req.body.pattern_id,
      (err) => {
        if (err) {
          console.error(err);
          res.status(400).send('Failed adding project');
        }
        res.status(201).send(`Added project into user ${req.params.user_id}`);
      },
    );
  },

  updateProjectProgress(req, res) {
    userProjectsModels.updateProgress(
      Number(req.params.user_id),
      Number(req.params.project_id),
      Number(req.body.progress),
      (err) => {
        if (err) {
          console.error(err);
          res.status(400).send('Failed updating progress', err);
        }
        if (Number(req.body.progress) < 100) {
          res.status(201).send('Project progress updated!');
        } else {
          userProjectsModels.updateCompletedTime(
            Number(req.params.user_id),
            Number(req.params.project_id),
            (error) => {
              if (error) {
                console.error(error);
                res.status(400).send('Failed updating complete time', error);
              }
              res.status(201).send('Project completed!');
            },
          );
        }
      },
    );
  },
};
