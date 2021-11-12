const express = require('express');
const PageController = require('../controllers/PageController');
const RedirectMiddleware = require('../middlewares/redirectMiddleware')

const router = express.Router();
router.route('/').get(PageController.getIndexPage);
router.route('/about').get(PageController.getAboutPage);
router.route('/register').get(RedirectMiddleware,PageController.getRegisterPage);
router.route('/login').get(RedirectMiddleware,PageController.getLoginPage);
router.route('/contact').get(PageController.getContactPage);
router.route('/contact').post(PageController.sendMail);


module.exports = router;