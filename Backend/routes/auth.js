const express = require('express');  
const { registerUser, registerCompany, login, getUserInfo, updateUserProfile } = require('../controllers/authController');  
const { authenticate } = require('../middleware/authMiddleware');  

const router = express.Router();  

// Ruta para registrar un nuevo usuario (candidato)  
router.post('/register-user', registerUser);  

// Ruta para registrar una nueva empresa (reclutador)  
router.post('/register-company', registerCompany);  

// Ruta para iniciar sesión  
router.post('/login', login);  

// Ruta para obtener información del usuario autenticado  
router.get('/whoami', authenticate, getUserInfo);  

// Ruta para actualizar el perfil del usuario  
router.patch('/edit-user-profile/:userId', authenticate, updateUserProfile);  

module.exports = router;