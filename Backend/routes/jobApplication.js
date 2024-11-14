const express = require('express');  
const { applyForJob, getApplicationsByUser } = require('../controllers/jobApplicationController');  
const { authenticate } = require('../middleware/authMiddleware');  

const router = express.Router();  

router.post('/apply', authenticate, applyForJob);  
router.get('/user/:userId', authenticate, getApplicationsByUser);  

module.exports = router;