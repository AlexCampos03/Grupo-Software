const JobApplication = require('../models/JobApplication');  

exports.applyForJob = async (req, res) => {  
    const { jobId } = req.body;  
    const application = new JobApplication({ userId: req.user.id, jobId });  
    await application.save();  
    res.status(201).json({ message: 'Application submitted successfully' });  
};  

exports.getApplicationsByUser = async (req, res) => {  
    const applications = await JobApplication.find({ userId: req.params.userId });  
    res.json(applications);  
};