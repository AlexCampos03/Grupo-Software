const jwt = require('jsonwebtoken');  

// Función para generar un token  
const generateToken = (user) => {  
    return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });  
};  

// Función para verificar el token  
const verifyToken = (token) => {  
    return jwt.verify(token, process.env.JWT_SECRET);  
};  

module.exports = { generateToken, verifyToken };