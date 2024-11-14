const express = require('express');  
const { registerUser, registerCompany, login, getUserInfo, updateUserProfile } = require('../controllers/authController');  
const { authenticate } = require('../middleware/authMiddleware');  

const router = express.Router();  

router.post('/register-user', registerUser);  
router.post('/register-company', registerCompany);  
router.post('/login', login);  
router.get('/whoami', authenticate, getUserInfo);  
router.patch('/edit-user-profile/:userId', authenticate, updateUserProfile);  

module.exports = router;