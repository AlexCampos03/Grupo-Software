const JobOffer = require('../models/JobOffer');  

// Crear una nueva oferta  
exports.createJobOffer = async (req, res) => {  
    const { title, description } = req.body;  
    const companyId = req.user.id; 

    try {  
        const newOffer = new JobOffer({ title, description, company: companyId });  
        await newOffer.save();  
        res.status(201).json(newOffer);  
    } catch (error) {  
        res.status(500).json({ message: 'Error al crear la oferta', error });  
    }  
};  

// Eliminar una oferta  
exports.deleteJobOffer = async (req, res) => {  
    const { id } = req.params;  

    try {  
        await JobOffer.findByIdAndDelete(id);  
        res.status(200).json({ message: 'Oferta eliminada' });  
    } catch (error) {  
        res.status(500).json({ message: 'Error al eliminar la oferta', error });  
    }  
};  

// Listar todas las ofertas  
exports.listJobOffers = async (req, res) => {  
    try {  
        const offers = await JobOffer.find().populate('company', 'name'); 
        res.status(200).json(offers);  
    } catch (error) {  
        res.status(500).json({ message: 'Error al listar ofertas', error });  
    }  
};  

// Aplicar a una oferta  
exports.applyToJobOffer = async (req, res) => {  
    const { id } = req.params;  
    const userId = req.user.id;  

    try {  
        const offer = await JobOffer.findById(id);  
        if (!offer) return res.status(404).json({ message: 'Oferta no encontrada' });  

        // Verificar si el usuario ya ha aplicado  
        if (!offer.applicants.includes(userId)) {  
            offer.applicants.push(userId);  
            await offer.save();  
        }  

        res.status(200).json({ message: 'Aplicación exitosa' });  
    } catch (error) {  
        res.status(500).json({ message: 'Error al aplicar a la oferta', error });  
    }  
};  

// Obtener los aplicantes de una oferta  
exports.getApplicantsForJobOffer = async (req, res) => {  
    const { id } = req.params;  

    try {  
        const offer = await JobOffer.findById(id).populate('applicants', 'firstName lastName'); 
        if (!offer) return res.status(404).json({ message: 'Oferta no encontrada' });  

        res.status(200).json(offer.applicants);  
    } catch (error) {  
        res.status(500).json({ message: 'Error al obtener los aplicantes', error });  
    }  
};