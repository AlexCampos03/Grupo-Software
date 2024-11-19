import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OfferCard = ({ title, datePosted, recruiterName }) => (
  <div className="bg-white rounded-lg shadow-lg p-6">
    <h3 className="text-lg font-bold">{title}</h3>
    <p className="text-gray-800">Publicado por: {recruiterName}</p>
    <p className="text-gray-500">Fecha: {new Date(datePosted).toLocaleDateString()}</p>
  </div>
);

const AdminOffersPage = () => {
  const [offers, setOffers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await axios.get('http://localhost:'); 
        setOffers(response.data.offers); 
      } catch (err) {
        console.error('Error al obtener las ofertas:', err);
        setError('No se pudieron cargar las ofertas. Inténtalo más tarde.');
      }
    };

    fetchOffers();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center my-6">Ofertas Publicadas</h1>
      {error ? (
        <div className="text-red-500 text-center">{error}</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <OfferCard key={offer._id} {...offer} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminOffersPage;
