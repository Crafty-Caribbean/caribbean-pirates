const router = require('express').Router();


/* "Pattern" =========================================*/
//(load patterns)
router.get('/patterns/:pattern_id')
//(add pattern)
router.post('/patterns')
//(report pattern)
router.put('/patterns/:pattern_id/reported')
// (delete pattern)
router.delete('/patterns/:pattern_id')

// "Users"  =========================================*/
// (user login)
router.get('/users/:user_id')
//(user sign up)
router.post('/users')
//(user edit profile/upload profile pic)
router.put('/users/:user_id')

/* "User-Favorite" ==================================*/
// unfavorite a pattern, remove from user favorite list
// (favorite a pattern, add to user favorite list)
router.post('/users/:user_id/favorite/')
router.delete('/users/:user_id/favorite/:pattern_id')

// Favorite and project are in one tables
// router.put('/users/:user_id/favorite/:pattern_id')

// "User-Project"  =========================================*/
// (create a project, add to project in progress list)
router.post('/users/:user_id/projects/')
// (update project progress)
router.put('/users/:user_id/projects/:pattern_id/progress')
// (delete a project, remove from project in progress/completed list)
// Favorite and project are in two table
router.delete('/users/:user_id/projects/:pattern_id')

// Favorite and project are in one tables
// router.put('/users/:user_id/projects/:pattern_id')


// "User-Purchased"  =========================================*/
// (Buy pattern, add to users owned pattern list)
router.post('/users/:user_id/purchased/')

module.exports = router;
