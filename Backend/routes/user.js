const express = require('express');  
const { getUserById, updateUser, deleteUser } = require('../controllers/userController');  
const { authenticate } = require('../middleware/authMiddleware');  

const router = express.Router();  

router.get('/:userId', authenticate, getUserById);  
router.patch('/:userId', authenticate, updateUser);  
router.delete('/:userId', authenticate, deleteUser);  

module.exports = router;