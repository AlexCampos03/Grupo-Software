const User = require('../models/User');  

exports.getUserById = async (req, res) => {  
    const user = await User.findById(req.params.userId);  
    res.json(user);  
};  

exports.updateUser = async (req, res) => {  
    const user = await User.findByIdAndUpdate(req.params.userId, req.body);  
    res.json({ message: 'User updated successfully' });  
};  

exports.deleteUser = async (req, res) => {  
    await User.findByIdAndDelete(req.params.userId);  
    res.json({ message: 'User deleted successfully' });  
};