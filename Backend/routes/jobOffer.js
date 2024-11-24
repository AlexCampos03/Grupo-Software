const express = require('express');  
const { createJobOffer, deleteJobOffer, listJobOffers, applyToJobOffer, getApplicantsForJobOffer } = require('../controllers/jobOfferController');  
const { authenticate } = require('../middleware/authMiddleware');  
const { isAdmin, isCompany } = require('../middleware/roleMiddleware');  

const router = express.Router();  

// Rutas para las ofertas  
router.post('/', authenticate, isCompany, createJobOffer); // Crear oferta  
router.delete('/:id', authenticate, isCompany, deleteJobOffer); // Eliminar oferta  
router.get('/', authenticate, listJobOffers); // Listar ofertas  
router.post('/apply/:id', authenticate, applyToJobOffer); // Aplicar a oferta  
router.get('/applicants/:id', authenticate, isAdmin, getApplicantsForJobOffer); // Ver aplicantes de una oferta  

module.exports = router;