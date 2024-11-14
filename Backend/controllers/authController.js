const User = require('../models/User');  
const bcrypt = require('bcrypt');  
const jwt = require('jsonwebtoken');  

exports.registerUser = async (req, res) => {  
    const { firstName, lastName, email, telephone, birthDate, department, municipality, gender, password } = req.body;  
    const hashedPassword = await bcrypt.hash(password, 10);  
    const user = new User({ firstName, lastName, email, telephone, birthDate, department, municipality, gender, password: hashedPassword });  
    await user.save();  
    res.status(201).json({ message: 'User registered successfully' });  
};  

exports.registerCompany = async (req, res) => {  
    // Similar implementation for company registration  
};  

exports.login = async (req, res) => {  
    const { email, password } = req.body;  
    const user = await User.findOne({ email });  
    if (!user || !(await bcrypt.compare(password, user.password))) {  
        return res.status(401).json({ message: 'Invalid credentials' });  
    }  
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });  
    res.json({ token });  
};  

exports.getUserInfo = (req, res) => {  
    res.json(req.user);  
};  

exports.updateUserProfile = async (req, res) => {  
    const { userId } = req.params;  
    const updates = req.body;  
    await User.findByIdAndUpdate(userId, updates);  
    res.json({ message: 'Profile updated successfully' });  
};