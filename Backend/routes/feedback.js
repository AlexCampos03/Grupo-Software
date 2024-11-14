const express = require('express');  
const { submitFeedback, getFeedbackByUser } = require('../controllers/feedbackController');  
const { authenticate } = require('../middleware/authMiddleware');  

const router = express.Router();  

router.post('/', authenticate, submitFeedback);  
router.get('/user/:userId', authenticate, getFeedbackByUser);  

module.exports = router;