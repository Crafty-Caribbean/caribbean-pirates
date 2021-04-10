const router = require('express').Router();
const users = require('./controllers/users');
const patterns = require('./controllers/patterns');
const search = require('./controllers/search');
const comments = require('./controllers/comments');
const userFavorite = require('./controllers/user_favorite');
const userProjects = require('./controllers/user_projects');
const userPurchased = require('./controllers/user_purchased');
const auth = require('./auth');
/* "Pattern" ========================================= */
// (load patterns)
router.get('/patterns/:pattern_id', patterns.getOnePattern);
router.get('/patterns/', patterns.getAllPatterns);
// (add pattern)
router.post('/patterns', patterns.addPattern);
// (report pattern)
router.put('/patterns/:pattern_id/reported');
// (delete pattern)
router.delete('/users/:user_id/created/:pattern_id', patterns.deleteOnePattern);

// "Users"  =========================================*/
router.get('/users/:user_id', users.getUserPatternList);

// router.post('/signup', users.signUp);
// router.post('/login', auth.authenticateToken, users.login);

// (user edit profile/upload profile pic)
router.put('/users/:user_id');

// "Comments"  ==========================================
router.get('/comments/:pattern_id', comments.getOnePatternComments);
router.get('/comments', comments.getAllComments);
router.post('/comments/:pattern_id', comments.addComment);

/* "User-Favorite" ================================== */
// (favorite a pattern, add to user favorite list)
router.post('/users/:user_id/favorite/', auth.authenticateToken, userFavorite.addFavorite);
// unfavorite a pattern, remove from user favorite list
router.delete('/users/:user_id/favorite/:pattern_id', auth.authenticateToken, userFavorite.deleteFavorite);

// Favorite and project are in one tables
// router.put('/users/:user_id/favorite/:pattern_id')

// "User-Project"  =========================================*/
// (create a project, add to project in progress list)
router.post('/users/:user_id/projects/', auth.authenticateToken, userProjects.addProject);
// (update project progress)
router.put('/users/:user_id/projects/:project_id/progress', auth.authenticateToken, userProjects.updateProjectProgress);
// (delete a project, remove from project in progress/completed list)
// Favorite and project are in two table
router.delete('/users/:user_id/projects/:project_id', auth.authenticateToken, userProjects.deleteProject);

// Favorite and project are in one tables
// router.put('/users/:user_id/projects/:pattern_id')

// "User-Purchased"  =========================================*/
// (Buy pattern, add to users owned pattern list)
router.post('/users/:user_id/purchased/', auth.authenticateToken, userPurchased.addPurchasePattern);
router.get('/users/:user_id/purchased/', userPurchased.findPurchasedPatterns);

// SEARCH BAR ==================================
router.get('/search', search.getSearchResult);

module.exports = router;
