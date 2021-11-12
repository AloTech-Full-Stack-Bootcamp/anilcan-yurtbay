const express = require('express');
const CourseController = require('../controllers/CourseController');
const RoleMiddleware = require('../middlewares/roleMiddleware');

const router = express.Router();

router.route('/').post(RoleMiddleware(["teacher","admin"]), CourseController.createCourse); // http://localhost:5000/courses
router.route('/').get(CourseController.getAllCourses); // http://localhost:5000/courses
router.route('/:slug').get(CourseController.getCourse); // http://localhost:5000/courses
router.route('/enroll').post(CourseController.enrollCourse);
router.route('/release').post(CourseController.releaseCourse);


module.exports = router;