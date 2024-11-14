const mongoose = require('mongoose');  

const cvSchema = new mongoose.Schema({  
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },  
    content: { type: String, required: true },  
}, { timestamps: true });  

module.exports = mongoose.model('CV', cvSchema);