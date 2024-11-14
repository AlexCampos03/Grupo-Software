const CV = require('../models/CV');  

exports.createCV = async (req, res) => {  
    const { content } = req.body;  
    const cv = new CV({ userId: req.user.id, content });  
    await cv.save();  
    res.status(201).json({ message: 'CV created successfully' });  
};  

exports.getCVByUser = async (req, res) => {  
    const cv = await CV.findOne({ userId: req.params.userId });  
    res.json(cv);  
};