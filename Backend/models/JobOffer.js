const mongoose = require('mongoose');  

const jobOfferSchema = new mongoose.Schema({  
    title: {  
        type: String,  
        required: true,  
    },  
    description: {  
        type: String,  
        required: true,  
    },  
    company: {  
        type: mongoose.Schema.Types.ObjectId,  
        ref: 'Company', // Asegúrate de que tienes el modelo Company definido  
        required: true,  
    },  
    applicants: [{  
        type: mongoose.Schema.Types.ObjectId,  
        ref: 'User', // Asegúrate de que tienes el modelo User definido  
    }],  
}, { timestamps: true });  

module.exports = mongoose.model('JobOffer', jobOfferSchema);