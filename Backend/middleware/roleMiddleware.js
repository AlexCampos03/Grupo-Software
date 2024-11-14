const roleMiddleware = (roles) => {  
    return (req, res, next) => {  
      if (!req.user || !roles.includes(req.user.role)) {  
        return res.status(403).json({ message: 'Acceso denegado. No tienes permisos suficientes.' });  
      }  
      next(); // Continuar con la siguiente función de middleware o ruta  
    };  
  };  
  
  module.exports = roleMiddleware;