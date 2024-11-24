const mongoose = require('mongoose');  

const jobOfferSchema = new mongoose.Schema({  
    title: { type: String, required: true },  
    description: { type: String, required: true },  
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
    applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], 
}, { timestamps: true });  

module.exports = mongoose.model('JobOffer', jobOfferSchema);