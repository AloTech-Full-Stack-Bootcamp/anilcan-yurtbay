const express = require('express');
const AuthController = require('../controllers/AuthController');
const AuthMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/signup').post(AuthController.createUser); 
router.route('/signin').post(AuthController.loginUser);
router.route('/signout').get(AuthMiddleware,AuthController.logoutUser);
router.route('/dashboard').get(AuthMiddleware,AuthController.getDashboardPage);


module.exports = router;