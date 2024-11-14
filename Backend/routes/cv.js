const express = require('express');  
const { createCV, getCVByUser } = require('../controllers/cvController');  
const { authenticate } = require('../middleware/authMiddleware');  

const router = express.Router();  

router.post('/', authenticate, createCV);  
router.get('/user/:userId', authenticate, getCVByUser);  

module.exports = router;