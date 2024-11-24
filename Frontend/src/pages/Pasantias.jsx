import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const JobCard = ({ name, company, esPasantia, image, onViewMore }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 relative">
      <img src={image} alt={name} className="w-full h-32 object-cover" />
      <h3 className="text-lg font-bold mt-4">{name}</h3>
      <p className="text-gray-800">{company.companyName}</p>
      <p className="text-gray-500">{esPasantia ? "Pasantía" : "Trabajo"}</p>
      <button
        onClick={onViewMore}
        className="absolute bottom-4 right-4 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300"
      >
        Ver más
      </button>
    </div>
  );
};

const JobDetailsModal = ({ job, onClose }) => {
  if (!job) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-3/4 max-w-lg">
        <h2 className="text-2xl font-bold mb-4">{job.name}</h2>
        <p><strong>Empresa:</strong> {job.company.companyName}</p>
        <p><strong>Tipo:</strong> {job.esPasantia ? 'Pasantía' : 'Trabajo'}</p>
        <p className="mt-4">{job.description || 'Sin descripción disponible.'}</p>
        <button
          onClick={onClose}
          className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

const PasantiasPage = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        let url = 'http://localhost:3000/api/vacant/intership'; // URL base para pasantías
        if (search) {
          url = `http://localhost:3000/api/vacant/intership/category/${search}`;
        }
        const response = await axios.get(url);
        setJobs(response.data.vacants);
        console.log(response.data.vacants);
      } catch (error) {
        console.error('Error al obtener las pasantías:', error);
      }
    };

    fetchJobs();
  }, [search]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleViewMore = async (jobId) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/vacant/intership/${jobId}`);
      setSelectedJob(response.data); // Asigna los detalles del trabajo seleccionado
      setIsModalOpen(true); // Abre el modal
    } catch (error) {
      console.error('Error al obtener los detalles de la pasantía:', error);
    }
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center my-6">PASANTÍAS: ÚLTIMAS OFERTAS</h1>
      <div className="mb-4">
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Buscar por categoría"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <JobCard
            key={job._id}
            {...job}
            image={job.imageUrl}
            onViewMore={() => handleViewMore(job._id)} 
          />
        ))}
      </div>
      {isModalOpen && <JobDetailsModal job={selectedJob} onClose={handleCloseModal} />}
    </div>
  );
};

export default PasantiasPage;
